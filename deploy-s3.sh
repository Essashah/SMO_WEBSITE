#!/bin/bash

# AWS S3 Deployment Script for Scout Me Online
# Make sure you've run 'npm run build' first

echo "🚀 Deploying to AWS S3..."

# Configuration - UPDATE THESE WITH YOUR VALUES
BUCKET_NAME="your-bucket-name"  # Replace with your S3 bucket name
REGION="us-east-1"  # Replace with your preferred region

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed."
    echo "Install it with: brew install awscli"
    echo "Or visit: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ dist folder not found. Running build..."
    npm run build
fi

# Check AWS credentials
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS credentials not configured."
    echo "Run: aws configure"
    exit 1
fi

echo "📦 Uploading files to S3 bucket: $BUCKET_NAME"

# Sync files to S3 (uploads all files and deletes removed ones)
aws s3 sync dist/ s3://$BUCKET_NAME/ \
    --region $REGION \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "*.html" \
    --exclude "videos/*"

# Upload HTML files without cache (for immediate updates)
aws s3 sync dist/ s3://$BUCKET_NAME/ \
    --region $REGION \
    --delete \
    --exclude "*" \
    --include "*.html" \
    --cache-control "no-cache, no-store, must-revalidate"

# Upload videos separately if needed
aws s3 sync dist/assets/videos/ s3://$BUCKET_NAME/assets/videos/ \
    --region $REGION \
    --cache-control "public, max-age=604800"

# Set bucket to host a static website (run this once to set up)
# Uncomment the lines below if you haven't configured static hosting yet:
# echo "🌐 Configuring static website hosting..."
# aws s3 website s3://$BUCKET_NAME/ \
#     --index-document index.html \
#     --error-document index.html \
#     --region $REGION

# Enable public read access (if needed)
# aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json

echo "✅ Deployment complete!"
echo "🌐 Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo "   (If you're using CloudFront, use that URL instead)"

