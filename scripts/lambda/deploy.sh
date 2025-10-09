#!/bin/bash

# Deployment script for MTA Conference Lambda functions
# Make sure you have AWS CLI configured with appropriate permissions

set -e

echo "🚀 Deploying MTA Conference Lambda functions..."

# Configuration
FUNCTION_NAME="livestream-password-verify"
ROLE_NAME="mtaconf-lambda-role"
TABLE_NAME="livestream-password-devices"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if AWS CLI is configured
if ! aws sts get-caller-identity --profile mta > /dev/null 2>&1; then
    print_error "AWS CLI is not configured with 'mta' profile. Please run 'aws configure --profile mta' first."
    exit 1
fi

# Get AWS account ID
ACCOUNT_ID=$(aws sts get-caller-identity --profile mta --query Account --output text)
REGION=$(aws configure get region --profile mta)

print_status "Using AWS Account: $ACCOUNT_ID"
print_status "Using Region: $REGION"

# Create IAM role for Lambda if it doesn't exist
ROLE_ARN="arn:aws:iam::${ACCOUNT_ID}:role/${ROLE_NAME}"

if ! aws iam get-role --role-name $ROLE_NAME --profile mta > /dev/null 2>&1; then
    print_warning "Creating IAM role: $ROLE_NAME"
    
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
        --role-name $ROLE_NAME \
        --assume-role-policy-document file://trust-policy.json \
        --profile mta

    # Attach basic execution policy
    aws iam attach-role-policy \
        --role-name $ROLE_NAME \
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
      "Resource": "arn:aws:dynamodb:${REGION}:${ACCOUNT_ID}:table/${TABLE_NAME}"
    }
  ]
}
EOF

    aws iam put-role-policy \
        --role-name $ROLE_NAME \
        --policy-name DynamoDBAccess \
        --policy-document file://dynamodb-policy.json \
        --profile mta

    print_status "IAM role created successfully"
    
    # Clean up temporary files
    rm -f trust-policy.json dynamodb-policy.json
else
    print_status "IAM role already exists: $ROLE_NAME"
fi

	# Install dependencies
	print_status "Installing dependencies..."
	mise exec -- pnpm install

	# Build TypeScript
	print_status "Building TypeScript..."
	mise exec -- pnpm run build

	# Create deployment package
	print_status "Creating deployment package..."
	# Include compiled JavaScript and node_modules, exclude source files and test files
	zip -r lambda-functions.zip dist/ node_modules/ -x "*.ts" "setup-dynamodb.js" "test-auth.js" "generate-password-hash.js" "test-payload.json" "minimal-test.js" "simple-test.js" > /dev/null

# Deploy or update Lambda function
if aws lambda get-function --function-name $FUNCTION_NAME --profile mta > /dev/null 2>&1; then
    print_status "Updating existing Lambda function: $FUNCTION_NAME"
    aws lambda update-function-code \
        --function-name $FUNCTION_NAME \
        --zip-file fileb://lambda-functions.zip \
        --profile mta
else
    print_status "Creating new Lambda function: $FUNCTION_NAME"
    aws lambda create-function \
        --function-name $FUNCTION_NAME \
        --runtime nodejs18.x \
        --role $ROLE_ARN \
        --handler lambda-password-verify.handler \
        --zip-file fileb://lambda-functions.zip \
        --timeout 30 \
        --memory-size 256 \
        --environment Variables="{PASSWORD_DEVICES_TABLE=${TABLE_NAME}}" \
        --profile mta
fi

# Get function URL
FUNCTION_URL=$(aws lambda get-function-url-config --function-name $FUNCTION_NAME --profile mta --query FunctionUrl --output text 2>/dev/null || echo "")

if [ -z "$FUNCTION_URL" ]; then
    print_status "Creating function URL..."
    FUNCTION_URL=$(aws lambda create-function-url-config \
        --function-name $FUNCTION_NAME \
        --auth-type NONE \
        --cors '{
            "AllowCredentials": true,
            "AllowHeaders": ["content-type", "cookie"],
            "AllowMethods": ["*"],
            "AllowOrigins": ["*"]
        }' \
        --query FunctionUrl --output text \
        --profile mta)
    
    # Add resource-based policy to allow public access
    print_status "Adding resource-based policy for public access..."
    aws lambda add-permission \
        --function-name $FUNCTION_NAME \
        --statement-id AllowPublicInvoke \
        --action lambda:InvokeFunctionUrl \
        --principal "*" \
        --function-url-auth-type NONE \
        --profile mta > /dev/null
fi

print_status "Lambda function deployed successfully!"
print_status "Function URL: $FUNCTION_URL"

# Clean up
rm -f lambda-functions.zip

echo ""
print_status "🎉 Deployment complete!"
echo ""
print_warning "Next steps:"
echo "1. Update your frontend with the Function URL: $FUNCTION_URL"
echo "2. Set up your DynamoDB table: mise exec -- pnpm run setup"
echo "3. Add your passwords: mise exec -- pnpm run add-password <password> <description>"
echo "4. Test the authentication flow"
echo ""
print_warning "Remember to:"
echo "- Replace sample passwords with your actual passwords"
echo "- Update the frontend PASSWORD_VERIFY_URL"
echo "- Test the complete authentication flow"
echo ""
print_warning "Troubleshooting:"
echo "- If you get 403 Forbidden errors, the resource-based policy was added automatically"
echo "- If you get dependency errors, ensure AWS SDK v3 and TypeScript dependencies are installed"
echo "- If TypeScript compilation fails, check for type errors in the .ts files"
echo "- Check CloudWatch logs if the function isn't working: aws logs describe-log-groups --log-group-name-prefix /aws/lambda/livestream-password-verify"
echo "- AWS SDK v3 + TypeScript provides better performance, smaller bundle size, and type safety"
