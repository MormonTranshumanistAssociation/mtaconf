#!/bin/bash

# Script to validate signed URLs for HLS stream access
# This script is called by Nginx to validate signed URLs

# Get the query parameters
DEVICE_ID=$(echo "$QUERY_STRING" | grep -o 'deviceId=[^&]*' | cut -d'=' -f2)
EXPIRES=$(echo "$QUERY_STRING" | grep -o 'expires=[^&]*' | cut -d'=' -f2)
SIGNATURE=$(echo "$QUERY_STRING" | grep -o 'signature=[^&]*' | cut -d'=' -f2)

# Check if all required parameters are present
if [ -z "$DEVICE_ID" ] || [ -z "$EXPIRES" ] || [ -z "$SIGNATURE" ]; then
    echo "HTTP/1.1 403 Forbidden"
    echo "Content-Type: text/plain"
    echo "Content-Length: 19"
    echo ""
    echo "Missing parameters"
    exit 0
fi

# Check if the URL has expired
CURRENT_TIME=$(date +%s)
if [ "$CURRENT_TIME" -gt "$EXPIRES" ]; then
    echo "HTTP/1.1 403 Forbidden"
    echo "Content-Type: text/plain"
    echo "Content-Length: 12"
    echo ""
    echo "URL expired"
    exit 0
fi

# Validate the signature
SECRET="mtaconf-streaming-secret-key"  # Should match Lambda function
PAYLOAD="deviceId=${DEVICE_ID}&expires=${EXPIRES}"
EXPECTED_SIGNATURE=$(echo -n "$PAYLOAD" | openssl dgst -sha256 -hmac "$SECRET" -binary | xxd -p -c 256)

if [ "$SIGNATURE" != "$EXPECTED_SIGNATURE" ]; then
    echo "HTTP/1.1 403 Forbidden"
    echo "Content-Type: text/plain"
    echo "Content-Length: 20"
    echo ""
    echo "Invalid signature"
    exit 0
fi

# If we get here, the URL is valid
echo "HTTP/1.1 200 OK"
echo "Content-Type: text/plain"
echo "Content-Length: 2"
echo ""
echo "OK"
exit 0
