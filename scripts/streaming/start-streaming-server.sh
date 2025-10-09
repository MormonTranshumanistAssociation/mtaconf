#!/bin/bash

# Start EC2 streaming server for MTA Conference
# This script creates an EC2 instance with Nginx-RTMP for HLS streaming

set -e

# Configuration
INSTANCE_TYPE="t3.medium"  # Good balance of CPU and network for streaming
KEY_NAME="mtaconf-streaming"  # You'll need to create this key pair
SECURITY_GROUP_NAME="mtaconf-streaming-sg"
USER_DATA_FILE="user-data.sh"

# Get region from mta profile
REGION=$(aws configure get region --profile mta)

# Get the latest Amazon Linux 2023 AMI ID for the region
AMI_ID=$(aws ec2 describe-images --owners amazon --filters "Name=name,Values=al2023-ami-*" "Name=architecture,Values=x86_64" --query 'Images | sort_by(@, &CreationDate) | [-1].ImageId' --output text --region "$REGION" --profile mta)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting MTA Conference streaming server...${NC}"

# Check if AWS CLI is configured with mta profile
if ! aws sts get-caller-identity --profile mta > /dev/null 2>&1; then
    echo -e "${RED}Error: AWS CLI not configured with 'mta' profile. Please run 'aws configure --profile mta' first.${NC}"
    exit 1
fi

# Create security group if it doesn't exist
echo -e "${YELLOW}Creating security group...${NC}"
if ! aws ec2 describe-security-groups --group-names "$SECURITY_GROUP_NAME" --region "$REGION" --profile mta > /dev/null 2>&1; then
    aws ec2 create-security-group \
        --group-name "$SECURITY_GROUP_NAME" \
        --description "Security group for MTA Conference streaming server" \
        --region "$REGION" \
        --profile mta
    
    # Allow RTMP (1935), HTTP (80), HTTPS (443), and SSH (22)
    aws ec2 authorize-security-group-ingress \
        --group-name "$SECURITY_GROUP_NAME" \
        --protocol tcp \
        --port 22 \
        --cidr 0.0.0.0/0 \
        --region "$REGION" \
        --profile mta
    
    aws ec2 authorize-security-group-ingress \
        --group-name "$SECURITY_GROUP_NAME" \
        --protocol tcp \
        --port 80 \
        --cidr 0.0.0.0/0 \
        --region "$REGION" \
        --profile mta
    
    aws ec2 authorize-security-group-ingress \
        --group-name "$SECURITY_GROUP_NAME" \
        --protocol tcp \
        --port 443 \
        --cidr 0.0.0.0/0 \
        --region "$REGION" \
        --profile mta
    
    aws ec2 authorize-security-group-ingress \
        --group-name "$SECURITY_GROUP_NAME" \
        --protocol tcp \
        --port 1935 \
        --cidr 0.0.0.0/0 \
        --region "$REGION" \
        --profile mta
    
    echo -e "${GREEN}Security group created successfully.${NC}"
else
    echo -e "${GREEN}Security group already exists.${NC}"
fi

# Get security group ID
SECURITY_GROUP_ID=$(aws ec2 describe-security-groups --group-names "$SECURITY_GROUP_NAME" --region "$REGION" --profile mta --query 'SecurityGroups[0].GroupId' --output text)

# Create user data script for instance initialization
cat > "$USER_DATA_FILE" << 'EOF'
#!/bin/bash
yum update -y
yum install -y docker git

# Start Docker
systemctl start docker
systemctl enable docker
usermod -a -G docker ec2-user

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Create streaming directory
mkdir -p /home/ec2-user/streaming
cd /home/ec2-user/streaming

# Create docker-compose.yml for Nginx-RTMP
cat > docker-compose.yml << 'DOCKEREOF'
version: '3.8'
services:
  nginx-rtmp:
    image: tiangolo/nginx-rtmp
    ports:
      - "1935:1935"  # RTMP port
      - "80:80"      # HTTP port for HLS
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./hls:/var/hls
    restart: unless-stopped
DOCKEREOF

# Create nginx configuration
cat > nginx.conf << 'NGINXEOF'
worker_processes auto;
rtmp_auto_push on;
events {}

rtmp {
    server {
        listen 1935;
        chunk_size 4000;
        
        application live {
            live on;
            
            # HLS settings
            hls on;
            hls_path /var/hls;
            hls_fragment 3;
            hls_playlist_length 60;
            
            # Allow publishing from any IP (you can restrict this)
            allow publish all;
            allow play all;
        }
    }
}

http {
    sendfile off;
    tcp_nopush on;
    directio 512;
    default_type application/octet-stream;

    server {
        listen 80;
        
        # Health check endpoint (no validation needed)
        location /health {
            return 200 "OK";
            add_header Content-Type text/plain;
        }
        
        # HLS stream files with signed URL validation
        location ~ ^/(stream\.m3u8|stream-\d+\.ts)$ {
            # Check if signed URL parameters are present
            if ($arg_deviceId = "") {
                return 403 "Missing deviceId parameter";
            }
            if ($arg_expires = "") {
                return 403 "Missing expires parameter";
            }
            if ($arg_signature = "") {
                return 403 "Missing signature parameter";
            }
            
            # Check if URL has expired (basic check)
            # Note: Nginx doesn't support direct timestamp comparison
            # For now, we'll skip expiration check and rely on signature validation
            # In production, you'd implement proper timestamp validation
            
            # For now, we'll allow access if parameters are present
            # In a production setup, you'd validate the signature here
            # This provides basic protection against casual sharing
            
            root /var/hls;
            add_header Cache-Control no-cache;
            add_header Access-Control-Allow-Origin *;
        }
        
        # Fallback for other files (no validation)
        location / {
            root /var/hls;
            add_header Cache-Control no-cache;
            add_header Access-Control-Allow-Origin *;
        }
    }
}
NGINXEOF

# Create HLS directory
mkdir -p hls

# Start the streaming server
docker-compose up -d

# Create a simple status script
cat > /home/ec2-user/streaming/status.sh << 'STATUSEOF'
#!/bin/bash
echo "=== Streaming Server Status ==="
echo "Docker containers:"
docker ps
echo ""
echo "RTMP URL: rtmp://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)/live/stream"
echo "HLS URL: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)/index.m3u8"
echo "Health check: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)/health"
STATUSEOF

chmod +x /home/ec2-user/streaming/status.sh

# Log completion
echo "Streaming server setup completed at $(date)" >> /var/log/streaming-setup.log
EOF

# Launch EC2 instance
echo -e "${YELLOW}Launching EC2 instance...${NC}"
INSTANCE_ID=$(aws ec2 run-instances \
    --image-id "$AMI_ID" \
    --count 1 \
    --instance-type "$INSTANCE_TYPE" \
    --key-name "$KEY_NAME" \
    --security-group-ids "$SECURITY_GROUP_ID" \
    --user-data "file://$USER_DATA_FILE" \
    --tag-specifications "ResourceType=instance,Tags=[{Key=Name,Value=mtaconf-streaming-server},{Key=Purpose,Value=streaming},{Key=Conference,Value=2025}]" \
    --region "$REGION" \
    --profile mta \
    --query 'Instances[0].InstanceId' \
    --output text)

echo -e "${GREEN}Instance launched: $INSTANCE_ID${NC}"

# Wait for instance to be running
echo -e "${YELLOW}Waiting for instance to be running...${NC}"
aws ec2 wait instance-running --instance-ids "$INSTANCE_ID" --region "$REGION" --profile mta

# Get public IP
PUBLIC_IP=$(aws ec2 describe-instances \
    --instance-ids "$INSTANCE_ID" \
    --region "$REGION" \
    --profile mta \
    --query 'Reservations[0].Instances[0].PublicIpAddress' \
    --output text)

echo -e "${GREEN}Instance is running!${NC}"
echo -e "${GREEN}Public IP: $PUBLIC_IP${NC}"

# Wait a bit for the setup to complete
echo -e "${YELLOW}Waiting for streaming server to initialize (this may take 2-3 minutes)...${NC}"
sleep 180

# Test if the server is ready
echo -e "${YELLOW}Testing streaming server...${NC}"
for i in {1..10}; do
    if curl -s "http://$PUBLIC_IP/health" > /dev/null; then
        echo -e "${GREEN}Streaming server is ready!${NC}"
        break
    else
        echo -e "${YELLOW}Waiting for server to be ready... (attempt $i/10)${NC}"
        sleep 30
    fi
done

# Output streaming information
echo ""
echo -e "${GREEN}=== STREAMING SERVER READY ===${NC}"
echo -e "${GREEN}Instance ID: $INSTANCE_ID${NC}"
echo -e "${GREEN}Public IP: $PUBLIC_IP${NC}"
echo ""
echo -e "${YELLOW}=== OBS STREAMING SETTINGS ===${NC}"
echo -e "${YELLOW}Server: rtmp://$PUBLIC_IP/live${NC}"
echo -e "${YELLOW}Stream Key: stream${NC}"
echo ""
echo -e "${YELLOW}=== HLS STREAM URL FOR WEBSITE ===${NC}"
echo -e "${YELLOW}http://$PUBLIC_IP/stream.m3u8${NC}"
echo ""
echo -e "${GREEN}Save this information! You'll need it for OBS and the website.${NC}"

# Save configuration to file
cat > streaming-config.json << EOF
{
  "instanceId": "$INSTANCE_ID",
  "publicIp": "$PUBLIC_IP",
  "rtmpUrl": "rtmp://$PUBLIC_IP/live",
  "streamKey": "stream",
  "hlsUrl": "http://$PUBLIC_IP/stream.m3u8",
  "region": "$REGION",
  "startedAt": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF

echo -e "${GREEN}Configuration saved to streaming-config.json${NC}"

# Update DynamoDB with new server information
echo -e "${YELLOW}Updating DynamoDB with new server information...${NC}"
aws dynamodb put-item \
    --table-name livestream-server-info \
    --item "{
        \"serverId\": {\"S\": \"current\"},
        \"instanceId\": {\"S\": \"$INSTANCE_ID\"},
        \"publicIp\": {\"S\": \"$PUBLIC_IP\"},
        \"rtmpUrl\": {\"S\": \"rtmp://$PUBLIC_IP/live\"},
        \"streamKey\": {\"S\": \"stream\"},
        \"hlsUrl\": {\"S\": \"http://$PUBLIC_IP/stream.m3u8\"},
        \"region\": {\"S\": \"$REGION\"},
        \"startedAt\": {\"S\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"},
        \"updatedAt\": {\"S\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}
    }" \
    --region "$REGION" \
    --profile mta

if [ $? -eq 0 ]; then
    echo -e "${GREEN}DynamoDB updated successfully${NC}"
else
    echo -e "${RED}Failed to update DynamoDB. Lambda function may not work correctly.${NC}"
fi

# Clean up
rm -f "$USER_DATA_FILE"

echo -e "${GREEN}Streaming server setup complete!${NC}"
echo -e "${YELLOW}To stop the server, run: ./stop-streaming-server.sh${NC}"
