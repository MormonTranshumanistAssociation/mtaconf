# Secure Livestream Password Protection with Device Limits

## Security Analysis

The original client-side solution was **NOT secure** because:
- Password hash was stored in the JavaScript bundle
- Anyone could inspect the source code and extract the hash
- The hash essentially became the "password"

## Current Solution: DynamoDB-Based Authentication with Device Limits

### Features:
- ✅ **Truly secure** - password verification happens server-side
- ✅ **Device limits** - each password can be used on up to 2 devices
- ✅ **Persistent authentication** - users don't need to re-enter passwords
- ✅ **Unique device tracking** - each device gets a unique ID stored in cookies
- ✅ **Cost-effective** - minimal infrastructure with DynamoDB on-demand billing

### Architecture:
1. **DynamoDB Table**: Stores password hashes and associated device IDs
2. **Lambda Function**: Handles password verification and device management
3. **Device Cookies**: Secure HTTP-only cookies for persistent authentication
4. **Frontend**: Simple password form with automatic device management

## Implementation Steps:

### 1. Configure AWS Profile
First, make sure you have the `mta` AWS profile configured:

```bash
aws configure --profile mta
```

### 2. Deploy the Lambda Function
```bash
cd scripts/lambda
./deploy.sh
```

### 3. Set Up DynamoDB Table and Add Passwords
```bash
# Set up the table and add sample passwords
mise exec -- pnpm run setup

# Add your actual passwords
mise exec -- pnpm run add-password "your_actual_password" "Description for this password"
mise exec -- pnpm run add-password "another_password" "Another description"

# List all passwords
mise exec -- pnpm run list-passwords
```

### 4. Update Frontend Configuration
Replace `PASSWORD_VERIFY_URL` in `src/2025/livestream.tsx` with your Lambda function URL.

### Option 2: CloudFront Signed URLs (Most Secure)

**Pros:**
- ✅ Ultra-secure - AWS handles all security
- ✅ No custom code needed
- ✅ Automatic expiration
- ✅ Built-in rate limiting

**Implementation:**
```bash
# Generate signed URL (expires in 1 hour)
aws cloudfront sign \
  --url https://your-distribution.cloudfront.net/livestream \
  --key-pair-id YOUR_KEY_PAIR_ID \
  --private-key file://private-key.pem \
  --expire-time $(date -d '+1 hour' +%s)
```

### Option 3: Simple Backend API

**Pros:**
- ✅ Full control over authentication logic
- ✅ Can add features like rate limiting, logging
- ✅ Easy to extend

**Implementation:**
- Deploy a simple Express.js API
- Use environment variables for password hash
- Add rate limiting with express-rate-limit

## Security Best Practices

1. **Never store passwords in client-side code**
2. **Use HTTPS for all authentication requests**
3. **Implement rate limiting to prevent brute force attacks**
4. **Use secure session management**
5. **Consider adding CAPTCHA for additional protection**

## Current Implementation Status

- ✅ Frontend component created
- ✅ Routing configured
- ✅ UI/UX implemented
- ✅ **Security issue identified and fixed**
- ✅ **Server-side verification implemented**
- ✅ **DynamoDB-based device limits implemented**
- ✅ **Complete deployment scripts created**

## Next Steps

1. **Deploy the Lambda function**: `cd scripts/lambda && ./deploy.sh`
2. **Set up DynamoDB table**: `mise exec -- pnpm run setup`
3. **Add your passwords**: `mise exec -- pnpm run add-password "password" "description"`
4. **Update frontend**: Replace `PASSWORD_VERIFY_URL` in `src/2025/livestream.tsx`
5. **Test the system**: `mise exec -- pnpm run test <function-url> <password>`

## Files Created

- `src/2025/livestream.tsx` - Frontend component
- `scripts/lambda/lambda-password-verify.js` - Server-side password verification
- `scripts/lambda/lambda-edge-auth.js` - Optional CloudFront integration
- `scripts/lambda/setup-dynamodb.js` - DynamoDB table management
- `scripts/lambda/test-auth.js` - Authentication testing script
- `scripts/lambda/generate-password-hash.js` - Temporary utility (delete after use)

## Security Level: 🔒 HIGH (with server-side verification)

