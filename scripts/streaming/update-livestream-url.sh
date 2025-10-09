#!/bin/bash

# Update the livestream component with the current streaming server URL
# This script reads the streaming configuration and updates the React component

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Updating livestream component with streaming URL...${NC}"

# Check if streaming-config.json exists
if [ ! -f "streaming-config.json" ]; then
    echo -e "${RED}Error: streaming-config.json not found.${NC}"
    echo -e "${YELLOW}Please run start-streaming-server.sh first.${NC}"
    exit 1
fi

# Get HLS URL from config
HLS_URL=$(grep -o '"hlsUrl": "[^"]*"' streaming-config.json | cut -d'"' -f4)

if [ -z "$HLS_URL" ]; then
    echo -e "${RED}Error: Could not find HLS URL in configuration.${NC}"
    exit 1
fi

echo -e "${YELLOW}Found HLS URL: $HLS_URL${NC}"

# Path to the livestream component
LIVESTREAM_COMPONENT="/Users/carl/Source/mtaconf/src/2025/livestream.tsx"

if [ ! -f "$LIVESTREAM_COMPONENT" ]; then
    echo -e "${RED}Error: Livestream component not found at $LIVESTREAM_COMPONENT${NC}"
    exit 1
fi

# Create backup
cp "$LIVESTREAM_COMPONENT" "$LIVESTREAM_COMPONENT.backup"
echo -e "${GREEN}Backup created: $LIVESTREAM_COMPONENT.backup${NC}"

# Update the default stream URL in the component
sed -i.tmp "s|streamUrl = \"[^\"]*\"|streamUrl = \"$HLS_URL\"|g" "$LIVESTREAM_COMPONENT"
rm "$LIVESTREAM_COMPONENT.tmp"

echo -e "${GREEN}Livestream component updated successfully!${NC}"
echo -e "${YELLOW}The component now uses: $HLS_URL${NC}"

# Also create a simple config file for the main app to use
cat > "/Users/carl/Source/mtaconf/streaming-config.js" << EOF
// Auto-generated streaming configuration
// This file is updated by the streaming scripts

export const STREAMING_CONFIG = {
  hlsUrl: "$HLS_URL",
  rtmpUrl: "$(grep -o '"rtmpUrl": "[^"]*"' streaming-config.json | cut -d'"' -f4)",
  streamKey: "$(grep -o '"streamKey": "[^"]*"' streaming-config.json | cut -d'"' -f4)",
  publicIp: "$(grep -o '"publicIp": "[^"]*"' streaming-config.json | cut -d'"' -f4)",
  instanceId: "$(grep -o '"instanceId": "[^"]*"' streaming-config.json | cut -d'"' -f4)",
  startedAt: "$(grep -o '"startedAt": "[^"]*"' streaming-config.json | cut -d'"' -f4)"
};

export default STREAMING_CONFIG;
EOF

echo -e "${GREEN}Streaming config file created: /Users/carl/Source/mtaconf/streaming-config.js${NC}"

echo ""
echo -e "${GREEN}=== NEXT STEPS ===${NC}"
echo -e "${YELLOW}1. The livestream component has been updated with the HLS URL${NC}"
echo -e "${YELLOW}2. You can now test the livestream with a valid password${NC}"
echo -e "${YELLOW}3. Use the RTMP URL in OBS: $(grep -o '"rtmpUrl": "[^"]*"' streaming-config.json | cut -d'"' -f4)/stream${NC}"
echo -e "${YELLOW}4. The stream will appear automatically when OBS starts streaming${NC}"
