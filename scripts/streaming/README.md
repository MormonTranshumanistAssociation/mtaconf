# MTA Conference Streaming Server

This directory contains scripts to manage an AWS EC2-based streaming server for the MTA Conference. The server uses Nginx-RTMP to accept RTMP streams from OBS and convert them to HLS for web playback.

## Prerequisites

1. **AWS CLI configured** with appropriate permissions
2. **EC2 Key Pair** named `mtaconf-streaming` in the `us-west-2` region
3. **AWS permissions** for EC2, Security Groups, and VPC operations

## Quick Start

### 1. Start the Streaming Server

**Note:** The streaming server startup script has been removed as part of the cleanup. To start a streaming server, you'll need to manually launch an EC2 instance and configure it using the remaining scripts.

The server should be configured with:
- Security group with necessary ports (22, 80, 443, 1935)
- t3.medium EC2 instance with Amazon Linux 2023
- Docker and Nginx-RTMP installed
- HLS streaming configured

### 2. Configure OBS

Use the RTMP settings provided by the start script:
- **Server**: `rtmp://stream.mtaconf.org/live`
- **Stream Key**: `stream`

### 3. Get Server Information

```bash
./get-streaming-info.sh
```

### 4. Stop the Server (to save costs)

```bash
./stop-streaming-server.sh <INSTANCE_ID>
```

## Scripts

### `stop-streaming-server.sh`
- Terminates the EC2 instance (requires instance ID as argument)
- Calculates total runtime from launch time
- Saves costs by stopping the instance

### `get-streaming-info.sh`
- Shows current server status and configuration
- Displays RTMP and HLS URLs from config file
- Tests server connectivity via HTTPS
- Shows OBS configuration settings

## Configuration

The streaming server is configured with:
- **Domain**: `stream.mtaconf.org` (HTTPS-enabled)
- **RTMP Port**: 1935 (for OBS input)
- **HTTP Port**: 80 (redirects to HTTPS)
- **HTTPS Port**: 443 (for secure HLS playback)
- **HLS Fragment**: 3 seconds
- **HLS Playlist Length**: 60 seconds
- **CORS**: Enabled for web embedding
- **SSL/TLS**: Let's Encrypt certificate with auto-renewal

## Security

- **HTTPS Encryption**: All web traffic encrypted with Let's Encrypt SSL certificate
- **Signed URLs**: HLS streams use cryptographically signed, time-limited URLs
- **Device Limits**: Each password can be used on up to 2 devices maximum
- **Elastic IP**: Consistent IP address for reliable DNS and SSL certificate management
- Security group allows RTMP (1935), HTTP (80), HTTPS (443), and SSH (22)
- Instance is tagged for easy identification
- No authentication on RTMP endpoint (stream key provides basic security)

## Cost Management

- **Instance Type**: t3.medium (~$0.0416/hour)
- **Storage**: 8GB gp3 (~$0.08/month)
- **Data Transfer**: ~$0.09/GB outbound
- **Estimated cost for 8-hour conference**: ~$5-10

## Troubleshooting

### ⚠️ CRITICAL: Key Pair Management
**NEVER reset, recreate, or change the key pair on an existing EC2 instance!** This will permanently lock you out of the instance.

**Before assuming key pair issues:**
1. Check if the instance is running: `./get-streaming-info.sh`
2. Verify the security group allows SSH (port 22)
3. Check if the instance is in a different availability zone
4. Try connecting with the original key pair first
5. Only consider key pair issues as a last resort

**If you must change key pairs:**
- Create a NEW instance instead of modifying the existing one
- This ensures you don't lose access to your current setup

### Server Not Responding
1. Check instance status: `./get-streaming-info.sh`
2. Wait 2-3 minutes after starting for initialization
3. Check security group allows port 80
4. SSH to instance and check Docker logs: `docker logs nginx-rtmp`

### OBS Connection Issues
1. Verify RTMP URL format: `rtmp://stream.mtaconf.org/live`
2. Check stream key is exactly: `stream`
3. Ensure instance is running and healthy
4. Test with `./get-streaming-info.sh`

### HLS Playback Issues
1. Verify HLS URL: `https://stream.mtaconf.org/stream.m3u8`
2. Check browser console for CORS errors
3. Ensure video player supports HLS
4. Test direct URL access in browser
5. Verify SSL certificate is valid

## Domain-Based Configuration

The streaming server uses a stable domain name for all access:

- **Stable Domain**: `stream.mtaconf.org` provides consistent access regardless of IP changes
- **Automatic DNS**: The start script automatically updates DNS to point to the current instance
- **SSL Certificates**: Let's Encrypt certificates are tied to the domain name
- **Simplified Configuration**: No need to track IP addresses in DynamoDB or configuration files
- **Elastic IP Support**: The script automatically associates existing elastic IPs for consistency

### Domain Management

The domain `stream.mtaconf.org` is managed through AWS Route 53 and automatically points to the current streaming server instance. The Lambda function uses the hardcoded domain name, eliminating the need for dynamic configuration lookups.

## Integration with Website

The HLS URL from the streaming server should be integrated with the website's password protection system. The livestream component will:

1. Authenticate users via the existing password system
2. Display the HLS stream using a compatible video player
3. Handle stream availability and fallback messages
4. Use signed URLs for secure, time-limited access

## Files Created

- `streaming-config.json`: Server configuration and URLs
- `streaming-config.json.backup`: Backup when server is stopped
- Security group: `mtaconf-streaming-sg`
- EC2 instance: `mtaconf-streaming-server`

## Cleanup

To completely remove all resources:
1. Run `./stop-streaming-server.sh` to terminate instance
2. Manually delete security group: `aws ec2 delete-security-group --group-name mtaconf-streaming-sg`
3. Delete key pair if no longer needed: `aws ec2 delete-key-pair --key-name mtaconf-streaming`
