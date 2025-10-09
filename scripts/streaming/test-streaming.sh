#!/bin/bash

# Test the complete streaming setup end-to-end
# This script helps verify that everything is working correctly

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}MTA Conference Streaming - End-to-End Test${NC}"
echo "=============================================="

# Check if streaming-config.json exists
if [ ! -f "streaming-config.json" ]; then
    echo -e "${RED}Error: streaming-config.json not found.${NC}"
    echo -e "${YELLOW}Please run start-streaming-server.sh first.${NC}"
    exit 1
fi

# Get configuration
INSTANCE_ID=$(grep -o '"instanceId": "[^"]*"' streaming-config.json | cut -d'"' -f4)
PUBLIC_IP=$(grep -o '"publicIp": "[^"]*"' streaming-config.json | cut -d'"' -f4)
RTMP_URL=$(grep -o '"rtmpUrl": "[^"]*"' streaming-config.json | cut -d'"' -f4)
STREAM_KEY=$(grep -o '"streamKey": "[^"]*"' streaming-config.json | cut -d'"' -f4)
HLS_URL=$(grep -o '"hlsUrl": "[^"]*"' streaming-config.json | cut -d'"' -f4)

echo -e "${BLUE}=== CONFIGURATION ===${NC}"
echo -e "Instance ID: $INSTANCE_ID"
echo -e "Public IP: $PUBLIC_IP"
echo -e "RTMP URL: $RTMP_URL"
echo -e "Stream Key: $STREAM_KEY"
echo -e "HLS URL: $HLS_URL"

# Test 1: Check instance status
echo ""
echo -e "${BLUE}=== TEST 1: Instance Status ===${NC}"
# Get region from mta profile
REGION=$(aws configure get region --profile mta)

INSTANCE_STATE=$(aws ec2 describe-instances \
    --instance-ids "$INSTANCE_ID" \
    --region "$REGION" \
    --profile mta \
    --query 'Reservations[0].Instances[0].State.Name' \
    --output text 2>/dev/null || echo "not-found")

if [ "$INSTANCE_STATE" = "running" ]; then
    echo -e "${GREEN}✓ Instance is running${NC}"
else
    echo -e "${RED}✗ Instance is not running (state: $INSTANCE_STATE)${NC}"
    exit 1
fi

# Test 2: Check server connectivity
echo ""
echo -e "${BLUE}=== TEST 2: Server Connectivity ===${NC}"
if curl -s --connect-timeout 10 "http://$PUBLIC_IP/health" > /dev/null; then
    echo -e "${GREEN}✓ Server is responding to health checks${NC}"
else
    echo -e "${RED}✗ Server is not responding to health checks${NC}"
    echo -e "${YELLOW}The server may still be initializing. Wait a few minutes and try again.${NC}"
fi

# Test 3: Check HLS endpoint
echo ""
echo -e "${BLUE}=== TEST 3: HLS Endpoint ===${NC}"
HLS_RESPONSE=$(curl -s -I "$HLS_URL" 2>/dev/null || echo "failed")
if echo "$HLS_RESPONSE" | grep -q "200 OK"; then
    echo -e "${GREEN}✓ HLS endpoint is accessible${NC}"
elif echo "$HLS_RESPONSE" | grep -q "404"; then
    echo -e "${YELLOW}⚠ HLS endpoint returns 404 (stream not active yet)${NC}"
    echo -e "${YELLOW}This is normal when no stream is being sent from OBS${NC}"
else
    echo -e "${RED}✗ HLS endpoint is not accessible${NC}"
    echo -e "${YELLOW}Response: $HLS_RESPONSE${NC}"
fi

# Test 4: Check website integration
echo ""
echo -e "${BLUE}=== TEST 4: Website Integration ===${NC}"
LIVESTREAM_COMPONENT="/Users/carl/Source/mtaconf/src/2025/livestream.tsx"
if [ -f "$LIVESTREAM_COMPONENT" ]; then
    if grep -q "$HLS_URL" "$LIVESTREAM_COMPONENT"; then
        echo -e "${GREEN}✓ Livestream component has been updated with HLS URL${NC}"
    else
        echo -e "${YELLOW}⚠ Livestream component may not have the current HLS URL${NC}"
        echo -e "${YELLOW}Run ./update-livestream-url.sh to update it${NC}"
    fi
else
    echo -e "${RED}✗ Livestream component not found${NC}"
fi

# Test 5: Check password protection
echo ""
echo -e "${BLUE}=== TEST 5: Password Protection ===${NC}"
PASSWORD_VERIFY_URL="https://duwawuyutcuguk7q76mlnbfasi0ylcsc.lambda-url.us-west-2.on.aws/"
if curl -s --connect-timeout 10 "$PASSWORD_VERIFY_URL" > /dev/null; then
    echo -e "${GREEN}✓ Password verification service is accessible${NC}"
else
    echo -e "${RED}✗ Password verification service is not accessible${NC}"
fi

# Summary
echo ""
echo -e "${BLUE}=== SUMMARY ===${NC}"
echo -e "${GREEN}Streaming server is ready for testing!${NC}"
echo ""
echo -e "${YELLOW}=== OBS SETTINGS ===${NC}"
echo -e "${YELLOW}Server: $RTMP_URL${NC}"
echo -e "${YELLOW}Stream Key: $STREAM_KEY${NC}"
echo ""
echo -e "${YELLOW}=== TESTING STEPS ===${NC}"
echo -e "${YELLOW}1. Open OBS Studio${NC}"
echo -e "${YELLOW}2. Go to Settings > Stream${NC}"
echo -e "${YELLOW}3. Set Service to 'Custom...'${NC}"
echo -e "${YELLOW}4. Set Server to: $RTMP_URL${NC}"
echo -e "${YELLOW}5. Set Stream Key to: $STREAM_KEY${NC}"
echo -e "${YELLOW}6. Click 'Start Streaming'${NC}"
echo -e "${YELLOW}7. Wait 30-60 seconds for the stream to appear${NC}"
echo -e "${YELLOW}8. Test the website with a valid password${NC}"
echo ""
echo -e "${GREEN}The stream should appear automatically in the website when OBS starts streaming!${NC}"
