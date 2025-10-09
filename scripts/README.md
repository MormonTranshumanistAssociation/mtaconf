# MTA Conference Scripts

This directory contains deployment and management scripts for the MTA Conference livestream authentication system.

## Directory Structure

```
scripts/
├── lambda/                    # Lambda function deployment scripts
│   ├── lambda-password-verify.js    # Main password verification function
│   ├── setup-dynamodb.js            # DynamoDB table setup and password management
│   ├── package.json                 # Lambda function dependencies
│   ├── deploy.sh                    # Automated deployment script
│   ├── TROUBLESHOOTING.md           # Comprehensive troubleshooting guide
│   ├── DEPLOYMENT_CHECKLIST.md      # Step-by-step deployment checklist
│   └── README.md                    # This file
└── README.md                        # This file
```

## Quick Start

### 1. Configure AWS Profile

First, make sure you have the `mta` AWS profile configured:

```bash
aws configure --profile mta
```

### 2. Deploy the Authentication System

```bash
cd scripts/lambda
./deploy.sh
```

This script will:
- Create the necessary IAM roles and policies
- Deploy the Lambda function
- Create a function URL for the frontend
- Set up the DynamoDB table

### 3. Add Your Passwords

```bash
# Add passwords to the system
mise exec -- pnpm run add-password "your_password_here" "Description for this password"
mise exec -- pnpm run add-password "another_password" "Another description"

# List all passwords
mise exec -- pnpm run list-passwords
```

### 4. Update Frontend

Update the `PASSWORD_VERIFY_URL` in `src/2025/livestream.tsx` with the Lambda function URL provided by the deployment script.

## Features

### Device Limits
- Each password can be used on up to 2 devices
- Device IDs are stored in secure HTTP-only cookies
- Users don't need to re-enter passwords on the same device
- Clear error message when device limit is reached

### Security
- Passwords are hashed with SHA-256
- Device IDs are cryptographically secure random strings
- All authentication happens server-side
- Secure cookie handling with proper flags

### Cost Optimization
- DynamoDB on-demand billing (only pay for what you use)
- Lambda function only runs when needed
- Minimal infrastructure footprint

## Management Commands

```bash
# Set up everything (table + sample passwords)
mise exec -- pnpm run setup

# Add a new password
mise exec -- pnpm run add-password "password" "description"

# List all passwords
mise exec -- pnpm run list-passwords

# Deploy/update Lambda function
mise exec -- pnpm run deploy
```

## Security Considerations

1. **Password Storage**: Passwords are hashed with SHA-256 before storage
2. **Device Tracking**: Each device gets a unique ID stored in secure cookies
3. **Rate Limiting**: Consider adding rate limiting to prevent brute force attacks
4. **HTTPS**: Ensure all communication happens over HTTPS
5. **Cookie Security**: Cookies are set with HttpOnly, Secure, and SameSite flags

## Troubleshooting

### Common Issues

1. **403 Forbidden Errors**: 
   - The deployment script automatically adds a resource-based policy for public access
   - If you still get 403 errors, manually add the policy:
   ```bash
   aws lambda add-permission --function-name livestream-password-verify --statement-id AllowPublicInvoke --action lambda:InvokeFunctionUrl --principal "*" --function-url-auth-type NONE --profile mta
   ```

2. **AWS SDK Dependency Errors**:
   - The deployment script includes all necessary AWS SDK v3 dependencies
   - If you get "Cannot find module" errors, ensure the deployment package includes node_modules
   - Required dependencies: @aws-sdk/client-dynamodb, @aws-sdk/lib-dynamodb
   - AWS SDK v3 is modular and much smaller than v2

3. **CORS Issues**: 
   - The Lambda function includes comprehensive CORS headers
   - Function URL is configured with proper CORS settings
   - Ensure your frontend uses `credentials: 'include'` in fetch requests

4. **Cookie Issues**: 
   - Ensure your site is served over HTTPS for secure cookies to work
   - Cookies are set with HttpOnly, Secure, and SameSite=Strict flags

5. **Log Group Issues**:
   - AWS Lambda automatically creates log groups when the function is invoked
   - If you see "log group does not exist" errors, the function isn't being invoked
   - Check the resource-based policy and CORS configuration

### Debugging

```bash
# Check Lambda function logs
aws logs describe-log-groups --log-group-name-prefix /aws/lambda/livestream-password-verify --profile mta

# Get the latest log stream
aws logs describe-log-streams --log-group-name /aws/lambda/livestream-password-verify --order-by LastEventTime --descending --max-items 1 --profile mta

# View recent logs
aws logs get-log-events --log-group-name /aws/lambda/livestream-password-verify --log-stream-name <STREAM_NAME> --profile mta

# Check DynamoDB table
aws dynamodb describe-table --table-name livestream-password-devices --profile mta

# Test the function directly
curl -X POST <FUNCTION_URL> -H "Content-Type: application/json" -d '{"password": "test_password"}' -v
```

### Deployment Issues

1. **Missing Dependencies**: The deployment script automatically installs all required dependencies
2. **IAM Permissions**: The script creates the necessary IAM role with DynamoDB access
3. **Function URL**: The script creates a function URL with proper CORS configuration
4. **Resource Policy**: The script automatically adds the resource-based policy for public access

## File Descriptions

- **lambda-password-verify.js**: Main authentication logic with device limits
- **setup-dynamodb.js**: DynamoDB table management and password operations
- **deploy.sh**: Automated deployment script with IAM setup and all fixes
- **package.json**: Lambda function dependencies and npm scripts
- **TROUBLESHOOTING.md**: Comprehensive guide for common deployment issues

## Additional Resources

- **DEPLOYMENT_CHECKLIST.md**: Step-by-step checklist for smooth deployment
- **TROUBLESHOOTING.md**: Detailed troubleshooting guide with solutions for all common issues
- **AWS Lambda Function URLs**: [Official Documentation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html)
- **DynamoDB**: [Official Documentation](https://docs.aws.amazon.com/dynamodb/)

## Quick Reference

For a smooth deployment from scratch, follow these files in order:
1. **DEPLOYMENT_CHECKLIST.md** - Complete step-by-step guide
2. **deploy.sh** - Automated deployment script
3. **TROUBLESHOOTING.md** - If you encounter any issues
