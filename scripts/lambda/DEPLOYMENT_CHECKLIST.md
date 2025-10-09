# Deployment Checklist

Use this checklist to ensure a smooth deployment from scratch.

## Pre-Deployment

- [ ] AWS CLI installed and configured
- [ ] `mta` AWS profile configured with appropriate permissions
- [ ] Node.js and pnpm installed
- [ ] Access to AWS account with Lambda, DynamoDB, and IAM permissions

## Deployment Steps

### 1. Configure AWS Profile
```bash
aws configure --profile mta
# Enter your AWS Access Key ID, Secret Access Key, and region (us-west-2)
```

### 2. Deploy the System
```bash
cd scripts/lambda
./deploy.sh
```

**Expected Output:**
- ✅ IAM role created/verified
- ✅ Dependencies installed (including TypeScript and AWS SDK v3)
- ✅ TypeScript compiled to JavaScript
- ✅ Lambda function deployed
- ✅ Function URL created
- ✅ Resource-based policy added

### 3. Set Up DynamoDB
```bash
mise exec -- pnpm run setup
```

**Expected Output:**
- ✅ DynamoDB table created
- ✅ Sample passwords added

### 4. Add Your Passwords
```bash
# Replace with your actual passwords
mise exec -- pnpm run add-password "your_actual_password" "Description"
mise exec -- pnpm run add-password "another_password" "Another description"
```

### 5. Update Frontend
- [ ] Copy the Function URL from deployment output
- [ ] Update `PASSWORD_VERIFY_URL` in `src/2025/livestream.tsx`
- [ ] Update the YouTube livestream URL if needed

### 6. Test the System
```bash
# Test with valid password
curl -X POST <FUNCTION_URL> -H "Content-Type: application/json" -d '{"password": "your_actual_password"}' -v

# Test with invalid password
curl -X POST <FUNCTION_URL> -H "Content-Type: application/json" -d '{"password": "wrong_password"}' -v
```

**Expected Results:**
- Valid password: 200 OK with device ID
- Invalid password: 401 Unauthorized

## Post-Deployment Verification

- [ ] Lambda function responds correctly
- [ ] Device limits work (test with 3 different "devices")
- [ ] Frontend can authenticate successfully
- [ ] Livestream displays after authentication
- [ ] Logout functionality works

## Common Issues and Quick Fixes

### 403 Forbidden
```bash
aws lambda add-permission --function-name livestream-password-verify --statement-id AllowPublicInvoke --action lambda:InvokeFunctionUrl --principal "*" --function-url-auth-type NONE --profile mta
```

### Missing Dependencies
```bash
cd scripts/lambda
mise exec -- pnpm install
./deploy.sh
```

### CORS Issues
- Ensure frontend uses `credentials: 'include'` in fetch requests
- Check that Function URL CORS is configured correctly

### No Logs
- Function not being invoked (check 403 errors)
- Check resource-based policy
- Verify Function URL is correct

## Cleanup (Optional)

After successful deployment, you can remove:
- [ ] Sample passwords from DynamoDB
- [ ] Test files (if any were created)
- [ ] Temporary deployment files

## Security Checklist

- [ ] Passwords are strong and unique
- [ ] HTTPS is used for all communications
- [ ] Device limits are enforced
- [ ] Secure cookies are working
- [ ] No sensitive data in logs

## Monitoring

Set up monitoring for:
- [ ] Lambda function invocations
- [ ] DynamoDB read/write operations
- [ ] Error rates
- [ ] Authentication success/failure rates

## Backup

- [ ] Document all passwords and their descriptions
- [ ] Export DynamoDB table structure
- [ ] Save Lambda function code
- [ ] Document IAM policies and roles
