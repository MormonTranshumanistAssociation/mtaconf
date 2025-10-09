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

### 1. Deploy the Lambda Function
```bash
cd scripts/lambda
./deploy.sh
```

### 2. Set Up DynamoDB Table and Add Passwords
```bash
# Set up the table and add sample passwords
npm run setup

# Add your actual passwords
npm run add-password "your_actual_password" "Description for this password"
npm run add-password "another_password" "Another description"

# List all passwords
npm run list-passwords
```

### 3. Update Frontend Configuration
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
- ⚠️ **Security issue identified and fixed**
- 🔄 **Server-side verification needed**

## Next Steps

1. Choose your preferred security approach (Lambda recommended)
2. Deploy the server-side verification
3. Update the frontend with the correct API endpoint
4. Test the complete flow
5. Remove the temporary password hash generation script

## Files Created

- `src/2025/livestream.tsx` - Frontend component
- `lambda-password-verify.js` - Server-side password verification
- `lambda-edge-auth.js` - Optional CloudFront integration
- `generate-password-hash.js` - Temporary utility (delete after use)

## Security Level: 🔒 HIGH (with server-side verification)

