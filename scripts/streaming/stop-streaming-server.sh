#!/bin/bash

# Stop EC2 streaming server for MTA Conference
# This script terminates the EC2 instance to save costs

set -e

# Configuration
# Get region from mta profile
REGION=$(aws configure get region --profile mta)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Stopping MTA Conference streaming server...${NC}"

# Check if AWS CLI is configured with mta profile
if ! aws sts get-caller-identity --profile mta > /dev/null 2>&1; then
    echo -e "${RED}Error: AWS CLI not configured with 'mta' profile. Please run 'aws configure --profile mta' first.${NC}"
    exit 1
fi

# Check if streaming-config.json exists
if [ ! -f "streaming-config.json" ]; then
    echo -e "${RED}Error: streaming-config.json not found.${NC}"
    echo -e "${YELLOW}Please run start-streaming-server.sh first or manually specify the instance ID.${NC}"
    echo ""
    echo "Usage: $0 [INSTANCE_ID]"
    echo "Or run from the directory where streaming-config.json exists."
    exit 1
fi

# Get instance ID from config file or command line argument
if [ $# -eq 1 ]; then
    INSTANCE_ID="$1"
    echo -e "${YELLOW}Using instance ID from command line: $INSTANCE_ID${NC}"
else
    INSTANCE_ID=$(grep -o '"instanceId": "[^"]*"' streaming-config.json | cut -d'"' -f4)
    echo -e "${YELLOW}Using instance ID from config: $INSTANCE_ID${NC}"
fi

if [ -z "$INSTANCE_ID" ]; then
    echo -e "${RED}Error: Could not determine instance ID.${NC}"
    exit 1
fi

# Check if instance exists and is running
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
elif [ "$INSTANCE_STATE" = "terminated" ]; then
    echo -e "${YELLOW}Instance $INSTANCE_ID is already terminated.${NC}"
    exit 0
elif [ "$INSTANCE_STATE" != "running" ] && [ "$INSTANCE_STATE" != "stopped" ]; then
    echo -e "${YELLOW}Instance is in state: $INSTANCE_STATE${NC}"
fi

# Get instance info before termination
echo -e "${YELLOW}Getting instance information...${NC}"
INSTANCE_INFO=$(aws ec2 describe-instances \
    --instance-ids "$INSTANCE_ID" \
    --region "$REGION" \
    --profile mta \
    --query 'Reservations[0].Instances[0]')

PUBLIC_IP=$(echo "$INSTANCE_INFO" | jq -r '.PublicIpAddress // "N/A"')
LAUNCH_TIME=$(echo "$INSTANCE_INFO" | jq -r '.LaunchTime')

echo -e "${GREEN}Instance Details:${NC}"
echo -e "  Instance ID: $INSTANCE_ID"
echo -e "  Public IP: $PUBLIC_IP"
echo -e "  Launch Time: $LAUNCH_TIME"
echo -e "  Current State: $INSTANCE_STATE"

# Confirm termination
echo ""
echo -e "${YELLOW}This will permanently terminate the streaming server instance.${NC}"
echo -e "${YELLOW}All data on the instance will be lost.${NC}"
echo ""
read -p "Are you sure you want to terminate instance $INSTANCE_ID? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo -e "${GREEN}Termination cancelled.${NC}"
    exit 0
fi

# Terminate the instance
echo -e "${YELLOW}Terminating instance...${NC}"
aws ec2 terminate-instances \
    --instance-ids "$INSTANCE_ID" \
    --region "$REGION" \
    --profile mta

echo -e "${GREEN}Instance termination initiated.${NC}"

# Wait for termination to complete
echo -e "${YELLOW}Waiting for instance to be terminated...${NC}"
aws ec2 wait instance-terminated --instance-ids "$INSTANCE_ID" --region "$REGION" --profile mta

echo -e "${GREEN}Instance terminated successfully.${NC}"

# Calculate runtime if we have the config
if [ -f "streaming-config.json" ]; then
    STARTED_AT=$(grep -o '"startedAt": "[^"]*"' streaming-config.json | cut -d'"' -f4)
    if [ -n "$STARTED_AT" ]; then
        START_TIMESTAMP=$(date -j -f "%Y-%m-%dT%H:%M:%SZ" "$STARTED_AT" "+%s" 2>/dev/null || date -d "$STARTED_AT" "+%s" 2>/dev/null)
        END_TIMESTAMP=$(date "+%s")
        RUNTIME_SECONDS=$((END_TIMESTAMP - START_TIMESTAMP))
        RUNTIME_HOURS=$((RUNTIME_SECONDS / 3600))
        RUNTIME_MINUTES=$(((RUNTIME_SECONDS % 3600) / 60))
        
        echo -e "${GREEN}Total runtime: ${RUNTIME_HOURS}h ${RUNTIME_MINUTES}m${NC}"
    fi
fi

# Clean up config file
if [ -f "streaming-config.json" ]; then
    mv streaming-config.json streaming-config.json.backup
    echo -e "${GREEN}Configuration backed up to streaming-config.json.backup${NC}"
fi

echo -e "${GREEN}Streaming server stopped successfully!${NC}"
echo -e "${YELLOW}Remember to update your website to remove the streaming URL.${NC}"
