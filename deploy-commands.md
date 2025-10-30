# AWS S3 Deployment Guide

## Prerequisites

1. **Install AWS CLI** (if not already installed):
   ```bash
   brew install awscli
   ```

2. **Configure AWS Credentials**:
   ```bash
   aws configure
   ```
   You'll need:
   - AWS Access Key ID
   - AWS Secret Access Key
   - Default region (e.g., `us-east-1`)
   - Default output format (e.g., `json`)

## Quick Deployment Commands

### Option 1: Using the deployment script

1. Make the script executable:
   ```bash
   chmod +x deploy-s3.sh
   ```

2. Edit `deploy-s3.sh` and update:
   - `BUCKET_NAME="your-bucket-name"`
   - `REGION="us-east-1"` (or your preferred region)

3. Run the script:
   ```bash
   ./deploy-s3.sh
   ```

### Option 2: Manual deployment commands

**Step 1: Create S3 bucket (if you haven't already)**
```bash
aws s3 mb s3://your-bucket-name --region us-east-1
```

**Step 2: Enable static website hosting**
```bash
aws s3 website s3://your-bucket-name/ \
    --index-document index.html \
    --error-document index.html
```

**Step 3: Set bucket policy for public access (if needed)**
Create a file `bucket-policy.json`:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

Apply the policy:
```bash
aws s3api put-bucket-policy --bucket your-bucket-name --policy file://bucket-policy.json
```

**Step 4: Upload files**
```bash
# Upload all files (excluding HTML for now)
aws s3 sync dist/ s3://your-bucket-name/ \
    --exclude "*.html" \
    --cache-control "public, max-age=31536000"

# Upload HTML files with no-cache
aws s3 sync dist/ s3://your-bucket-name/ \
    --exclude "*" \
    --include "*.html" \
    --cache-control "no-cache, no-store, must-revalidate"
```

**Step 5: Verify upload**
```bash
aws s3 ls s3://your-bucket-name/ --recursive
```

## Important Notes

1. **CloudFront (Recommended)**: For production, use CloudFront CDN in front of S3 for better performance and HTTPS.

2. **HTTPS**: S3 static hosting only provides HTTP. For HTTPS, use CloudFront.

3. **CORS**: If you need to access APIs from different domains, configure CORS on your S3 bucket.

4. **Redirect Rules**: For React Router (SPA), make sure your error document points to `index.html` so routes work correctly.

## Testing Your Deployment

After deployment, visit:
```
http://your-bucket-name.s3-website-us-east-1.amazonaws.com
```

## Useful Commands

**List all files in bucket:**
```bash
aws s3 ls s3://your-bucket-name/ --recursive
```

**Delete all files from bucket:**
```bash
aws s3 rm s3://your-bucket-name/ --recursive
```

**Copy a specific file:**
```bash
aws s3 cp dist/index.html s3://your-bucket-name/index.html
```

## Troubleshooting

- **Access Denied**: Check bucket policy and make sure it allows public read access
- **404 Errors**: Ensure index.html is properly uploaded and error document is set
- **Assets not loading**: Check that paths in index.html are relative (starting with `/`)

