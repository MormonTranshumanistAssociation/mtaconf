# MTA Conference Streaming Server

This directory contains scripts to manage an AWS EC2-based streaming server for the MTA Conference. The server uses Nginx-RTMP to accept RTMP streams from OBS and convert them to HLS for web playback.

## Prerequisites

1. **AWS CLI configured** with appropriate permissions
2. **EC2 Key Pair** named `mtaconf-streaming` in the `us-west-2` region
3. **AWS permissions** for EC2, Security Groups, and VPC operations

## Quick Start

### 1. Start the Streaming Server

```bash
./start-streaming-server.sh
```

This will:
- Create a security group with necessary ports (22, 80, 443, 1935)
- Launch a t3.medium EC2 instance with Amazon Linux 2023
- Install Docker and Nginx-RTMP
- Configure HLS streaming
- Return RTMP and HLS URLs

### 2. Configure OBS

Use the RTMP settings provided by the start script:
- **Server**: `rtmp://[PUBLIC_IP]/live`
- **Stream Key**: `stream`

### 3. Get Server Information

```bash
./get-streaming-info.sh
```

### 4. Stop the Server (to save costs)

```bash
./stop-streaming-server.sh
```

## Scripts

### `start-streaming-server.sh`
- Launches EC2 instance with streaming server
- Creates security group with required ports
- Installs and configures Nginx-RTMP with HLS
- Outputs RTMP and HLS URLs
- Saves configuration to `streaming-config.json`

### `stop-streaming-server.sh`
- Terminates the EC2 instance
- Calculates total runtime
- Backs up configuration file
- Saves costs by stopping the instance

### `get-streaming-info.sh`
- Shows current server status
- Displays RTMP and HLS URLs
- Tests server connectivity
- Shows runtime information

## Configuration

The streaming server is configured with:
- **RTMP Port**: 1935 (for OBS input)
- **HTTP Port**: 80 (for HLS playback)
- **HLS Fragment**: 3 seconds
- **HLS Playlist Length**: 60 seconds
- **CORS**: Enabled for web embedding

## Security

- Security group allows RTMP (1935), HTTP (80), HTTPS (443), and SSH (22)
- Instance is tagged for easy identification
- No authentication on RTMP endpoint (stream key provides basic security)
- HLS streams are publicly accessible (protect via website authentication)

## Cost Management

- **Instance Type**: t3.medium (~$0.0416/hour)
- **Storage**: 8GB gp3 (~$0.08/month)
- **Data Transfer**: ~$0.09/GB outbound
- **Estimated cost for 8-hour conference**: ~$5-10

## Troubleshooting

### Server Not Responding
1. Check instance status: `./get-streaming-info.sh`
2. Wait 2-3 minutes after starting for initialization
3. Check security group allows port 80
4. SSH to instance and check Docker logs: `docker logs nginx-rtmp`

### OBS Connection Issues
1. Verify RTMP URL format: `rtmp://[IP]/live/stream`
2. Check stream key is exactly: `stream`
3. Ensure instance is running and healthy
4. Test with `./get-streaming-info.sh`

### HLS Playback Issues
1. Verify HLS URL: `http://[IP]/index.m3u8`
2. Check browser console for CORS errors
3. Ensure video player supports HLS
4. Test direct URL access in browser

## Integration with Website

The HLS URL from the streaming server should be integrated with the website's password protection system. The livestream component will:

1. Authenticate users via the existing password system
2. Display the HLS stream using a compatible video player
3. Handle stream availability and fallback messages

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
