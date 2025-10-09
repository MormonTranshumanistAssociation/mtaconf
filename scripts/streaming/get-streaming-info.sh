#!/bin/bash

# Get streaming server information
# This script retrieves the current streaming server status and URLs

set -e

# Configuration
# Get region from mta profile
REGION=$(aws configure get region --profile mta)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}MTA Conference Streaming Server Information${NC}"
echo "=============================================="

# Check if AWS CLI is configured with mta profile
if ! aws sts get-caller-identity --profile mta > /dev/null 2>&1; then
    echo -e "${RED}Error: AWS CLI not configured with 'mta' profile. Please run 'aws configure --profile mta' first.${NC}"
    exit 1
fi

# Check if streaming-config.json exists
if [ ! -f "streaming-config.json" ]; then
    echo -e "${RED}Error: streaming-config.json not found.${NC}"
    echo -e "${YELLOW}Please run start-streaming-server.sh first.${NC}"
    exit 1
fi

# Get instance ID from config file
INSTANCE_ID=$(grep -o '"instanceId": "[^"]*"' streaming-config.json | cut -d'"' -f4)
PUBLIC_IP=$(grep -o '"publicIp": "[^"]*"' streaming-config.json | cut -d'"' -f4)
RTMP_URL=$(grep -o '"rtmpUrl": "[^"]*"' streaming-config.json | cut -d'"' -f4)
STREAM_KEY=$(grep -o '"streamKey": "[^"]*"' streaming-config.json | cut -d'"' -f4)
HLS_URL=$(grep -o '"hlsUrl": "[^"]*"' streaming-config.json | cut -d'"' -f4)
STARTED_AT=$(grep -o '"startedAt": "[^"]*"' streaming-config.json | cut -d'"' -f4)

if [ -z "$INSTANCE_ID" ]; then
    echo -e "${RED}Error: Could not determine instance ID from config.${NC}"
    exit 1
fi

# Check instance status
echo -e "${YELLOW}Checking instance status...${NC}"
INSTANCE_STATE=$(aws ec2 describe-instances \
    --instance-ids "$INSTANCE_ID" \
    --region "$REGION" \
    --profile mta \
    --query 'Reservations[0].Instances[0].State.Name' \
    --output text 2>/dev/null || echo "not-found")

if [ "$INSTANCE_STATE" = "not-found" ]; then
    echo -e "${RED}Error: Instance $INSTANCE_ID not found.${NC}"
    exit 1
fi

# Get current public IP (in case it changed)
CURRENT_PUBLIC_IP=$(aws ec2 describe-instances \
    --instance-ids "$INSTANCE_ID" \
    --region "$REGION" \
    --profile mta \
    --query 'Reservations[0].Instances[0].PublicIpAddress' \
    --output text 2>/dev/null || echo "N/A")

echo ""
echo -e "${BLUE}=== INSTANCE STATUS ===${NC}"
echo -e "Instance ID: $INSTANCE_ID"
echo -e "State: $INSTANCE_STATE"
echo -e "Public IP: $CURRENT_PUBLIC_IP"
echo -e "Started At: $STARTED_AT"

if [ "$INSTANCE_STATE" = "running" ]; then
    echo ""
    echo -e "${BLUE}=== STREAMING CONFIGURATION ===${NC}"
    echo -e "${GREEN}RTMP Server: $RTMP_URL${NC}"
    echo -e "${GREEN}Stream Key: $STREAM_KEY${NC}"
    echo -e "${GREEN}HLS URL: $HLS_URL${NC}"
    
    echo ""
    echo -e "${BLUE}=== OBS SETTINGS ===${NC}"
    echo -e "${YELLOW}Server: $RTMP_URL${NC}"
    echo -e "${YELLOW}Stream Key: $STREAM_KEY${NC}"
    
    # Test if server is responding
    echo ""
    echo -e "${YELLOW}Testing server connectivity...${NC}"
    if curl -s --connect-timeout 5 "http://$CURRENT_PUBLIC_IP/health" > /dev/null; then
        echo -e "${GREEN}✓ Server is responding to health checks${NC}"
    else
        echo -e "${RED}✗ Server is not responding to health checks${NC}"
        echo -e "${YELLOW}The server may still be initializing. Wait a few minutes and try again.${NC}"
    fi
    
    # Calculate runtime
    if [ -n "$STARTED_AT" ]; then
        START_TIMESTAMP=$(date -j -f "%Y-%m-%dT%H:%M:%SZ" "$STARTED_AT" "+%s" 2>/dev/null || date -d "$STARTED_AT" "+%s" 2>/dev/null)
        CURRENT_TIMESTAMP=$(date "+%s")
        RUNTIME_SECONDS=$((CURRENT_TIMESTAMP - START_TIMESTAMP))
        RUNTIME_HOURS=$((RUNTIME_SECONDS / 3600))
        RUNTIME_MINUTES=$(((RUNTIME_SECONDS % 3600) / 60))
        
        echo ""
        echo -e "${BLUE}=== RUNTIME ===${NC}"
        echo -e "Uptime: ${RUNTIME_HOURS}h ${RUNTIME_MINUTES}m"
    fi
    
elif [ "$INSTANCE_STATE" = "terminated" ]; then
    echo -e "${RED}Instance has been terminated.${NC}"
    echo -e "${YELLOW}Run start-streaming-server.sh to start a new instance.${NC}"
else
    echo -e "${YELLOW}Instance is in state: $INSTANCE_STATE${NC}"
    echo -e "${YELLOW}Wait for it to be running before using the streaming URLs.${NC}"
fi

echo ""
echo -e "${BLUE}=== COMMANDS ===${NC}"
echo -e "Start server: ./start-streaming-server.sh"
echo -e "Stop server:  ./stop-streaming-server.sh"
echo -e "Get info:     ./get-streaming-info.sh"
