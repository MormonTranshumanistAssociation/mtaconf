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
    echo -e "${YELLOW}Please ensure the streaming server is configured and running.${NC}"
    exit 1
fi

# Get configuration from config file
DOMAIN=$(grep -o '"domain": "[^"]*"' streaming-config.json | cut -d'"' -f4)
RTMP_URL=$(grep -o '"rtmpUrl": "[^"]*"' streaming-config.json | cut -d'"' -f4)
HLS_URL=$(grep -o '"hlsUrl": "[^"]*"' streaming-config.json | cut -d'"' -f4)

echo ""
echo -e "${BLUE}=== STREAMING CONFIGURATION ===${NC}"
echo -e "Domain: $DOMAIN"

echo -e "${GREEN}RTMP Server: $RTMP_URL${NC}"
echo -e "${GREEN}HLS URL: $HLS_URL${NC}"

echo ""
echo -e "${BLUE}=== OBS SETTINGS ===${NC}"
echo -e "${YELLOW}Server: $RTMP_URL${NC}"
echo -e "${YELLOW}Stream Key: stream${NC}"

# Test if server is responding
echo ""
echo -e "${YELLOW}Testing server connectivity...${NC}"
if curl -s --connect-timeout 5 "https://stream.mtaconf.org/health" > /dev/null; then
    echo -e "${GREEN}✓ Server is responding to health checks via HTTPS${NC}"
else
    echo -e "${RED}✗ Server is not responding to health checks${NC}"
    echo -e "${YELLOW}The server may still be initializing. Wait a few minutes and try again.${NC}"
fi

echo ""
echo -e "${BLUE}=== COMMANDS ===${NC}"
echo -e "Stop server:  ./stop-streaming-server.sh <INSTANCE_ID>"
echo -e "Get info:     ./get-streaming-info.sh"
echo -e "Update URLs:  ./update-livestream-url.sh"
