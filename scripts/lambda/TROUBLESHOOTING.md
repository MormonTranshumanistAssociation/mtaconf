# Lambda Function Troubleshooting Guide

This guide documents common issues encountered during deployment and their solutions.

## Issue 1: 403 Forbidden Error

**Symptoms:**
- Getting 403 Forbidden when calling the Lambda Function URL
- Error message: "Forbidden. For troubleshooting Function URL authorization issues..."

**Root Cause:**
Lambda Function URLs require a resource-based policy to allow public access.

**Solution:**
The deployment script automatically adds this policy, but if you need to add it manually:

```bash
aws lambda add-permission \
    --function-name livestream-password-verify \
    --statement-id AllowPublicInvoke \
    --action lambda:InvokeFunctionUrl \
    --principal "*" \
    --function-url-auth-type NONE \
    --profile mta
```

## Issue 2: AWS SDK Dependency Errors

**Symptoms:**
- Error: "Cannot find module '@aws-sdk/client-dynamodb'"
- Error: "Cannot find module '@aws-sdk/lib-dynamodb'"

**Root Cause:**
The deployment package doesn't include the necessary AWS SDK v3 dependencies.

**Solution:**
Ensure the deployment script includes node_modules in the zip file:

```bash
# The deployment script should use:
zip -r lambda-functions.zip lambda-password-verify.js node_modules/ -x "setup-dynamodb.js" "test-auth.js" "generate-password-hash.js" "test-payload.json" "minimal-test.js" "simple-test.js"
```

**Required Dependencies (AWS SDK v3 + TypeScript):**
- @aws-sdk/client-dynamodb (DynamoDB client)
- @aws-sdk/lib-dynamodb (DynamoDB document client with simplified API)
- @types/node (Node.js type definitions)
- typescript (TypeScript compiler)

**Benefits of AWS SDK v3 + TypeScript:**
- Much smaller bundle size (only includes what you need)
- Better performance
- Modular architecture
- No more maintenance mode warnings
- Type safety and better developer experience
- Compile-time error checking

## Issue 3: CORS Configuration Issues

**Symptoms:**
- CORS errors in browser console
- Preflight OPTIONS requests failing

**Root Cause:**
Incorrect CORS configuration on the Function URL.

**Solution:**
The deployment script configures CORS correctly:

```bash
aws lambda create-function-url-config \
    --function-name livestream-password-verify \
    --auth-type NONE \
    --cors '{
        "AllowCredentials": true,
        "AllowHeaders": ["content-type", "cookie"],
        "AllowMethods": ["*"],
        "AllowOrigins": ["*"]
    }' \
    --profile mta
```

**Frontend Requirements:**
- Use `credentials: 'include'` in fetch requests
- Include proper Content-Type headers

## Issue 4: Log Group Does Not Exist

**Symptoms:**
- Error: "Log group '/aws/lambda/livestream-password-verify' does not exist"
- No logs appearing in CloudWatch

**Root Cause:**
The Lambda function is not being invoked, so no log group is created.

**Solution:**
This usually indicates one of the above issues (403 Forbidden, dependency errors, or CORS issues). Fix those first, then the log group will be created automatically when the function is invoked.

## Issue 5: InvalidRequestContentException

**Symptoms:**
- Error when invoking Lambda directly via AWS CLI
- "Could not parse request body into json: Invalid UTF-8 start byte"

**Root Cause:**
Incorrect payload format when testing with AWS CLI.

**Solution:**
Use proper JSON format for testing:

```bash
# Create a proper test payload
echo '{"body": "{\"password\": \"test_password\"}", "httpMethod": "POST", "headers": {"Content-Type": "application/json"}}' > test-payload.json

# Test the function
aws lambda invoke --function-name livestream-password-verify --payload file://test-payload.json --profile mta response.json
```

## Issue 6: Handler Configuration

**Symptoms:**
- Function exists but returns errors
- Handler not found errors

**Root Cause:**
Incorrect handler configuration in Lambda function.

**Solution:**
Ensure the handler is set correctly:

```bash
aws lambda update-function-configuration \
    --function-name livestream-password-verify \
    --handler lambda-password-verify.handler \
    --profile mta
```

## Issue 7: IAM Permissions

**Symptoms:**
- Access denied errors
- Function can't access DynamoDB

**Root Cause:**
Missing IAM permissions for the Lambda execution role.

**Solution:**
The deployment script creates the necessary IAM role with:
- AWSLambdaBasicExecutionRole (for CloudWatch Logs)
- Custom DynamoDB policy for table access

If you need to create the role manually:

```bash
# Create trust policy
cat > trust-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF

# Create role
aws iam create-role \
    --role-name mtaconf-lambda-role \
    --assume-role-policy-document file://trust-policy.json \
    --profile mta

# Attach basic execution policy
aws iam attach-role-policy \
    --role-name mtaconf-lambda-role \
    --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole \
    --profile mta

# Create and attach DynamoDB policy
cat > dynamodb-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:GetItem",
        "dynamodb:PutItem",
        "dynamodb:UpdateItem",
        "dynamodb:Scan"
      ],
      "Resource": "arn:aws:dynamodb:us-west-2:ACCOUNT_ID:table/livestream-password-devices"
    }
  ]
}
EOF

aws iam put-role-policy \
    --role-name mtaconf-lambda-role \
    --policy-name DynamoDBAccess \
    --policy-document file://dynamodb-policy.json \
    --profile mta
```

## Testing the Complete System

After deployment, test the system thoroughly:

```bash
# 1. Test with valid password
curl -X POST <FUNCTION_URL> \
    -H "Content-Type: application/json" \
    -d '{"password": "test_password"}' \
    -v

# 2. Test with invalid password
curl -X POST <FUNCTION_URL> \
    -H "Content-Type: application/json" \
    -d '{"password": "wrong_password"}' \
    -v

# 3. Test device limit (use same password from different "devices")
curl -X POST <FUNCTION_URL> \
    -H "Content-Type: application/json" \
    -d '{"password": "test_password"}' \
    -v

# 4. Test with existing device cookie
curl -X POST <FUNCTION_URL> \
    -H "Content-Type: application/json" \
    -H "Cookie: device_id=EXISTING_DEVICE_ID" \
    -d '{"password": "test_password"}' \
    -v
```

## Expected Responses

**Valid Password (First Device):**
```json
{
  "success": true,
  "message": "Authentication successful",
  "deviceId": "abc123...",
  "devicesUsed": 1,
  "maxDevices": 2
}
```

**Valid Password (Existing Device):**
```json
{
  "success": true,
  "message": "Authentication successful",
  "deviceId": "abc123..."
}
```

**Invalid Password:**
```json
{
  "success": false,
  "error": "Invalid password"
}
```

**Device Limit Reached:**
```json
{
  "success": false,
  "error": "This password can be associated with up to two devices at most. Please purchase another remote pass if you wish to view it on more than two devices."
}
```

## Cleanup

After testing, clean up temporary files:

```bash
rm -f trust-policy.json dynamodb-policy.json test-payload.json response.json
```
