# Manual AWS S3 Upload Guide (No CLI)

## Step 1: Build Your Website

The build folder is called `dist`. You already have it from running `npm run build`.

**Location:** `/Users/essashah/Desktop/SWE/SCOUT ME ONLINE_2/dist`

This folder contains:

- `index.html` - Your main HTML file
- `assets/` - CSS, JavaScript, and video files

---

## Step 2: Access AWS S3 Console

1. Go to [AWS Console](https://console.aws.amazon.com)
2. Sign in with your AWS account
3. Search for "S3" in the search bar
4. Click on "S3" service

---

## Step 3: Create S3 Bucket (if you don't have one)

1. Click the **"Create bucket"** button
2. **Bucket name:** Enter a unique name (e.g., `scout-me-online-website`)
   - Must be globally unique across all AWS accounts
   - Use lowercase letters, numbers, and hyphens only
3. **AWS Region:** Select your preferred region (e.g., `us-east-1`)
4. **Block Public Access:**
   - ⚠️ **Uncheck "Block all public access"**
   - Check the box that says "I acknowledge that the current settings might result in this bucket and the objects within becoming public"
   - This is needed for static website hosting
5. **Bucket Versioning:** Leave as default (disabled)
6. **Default encryption:** Leave as default
7. Click **"Create bucket"**

---

## Step 4: Enable Static Website Hosting

1. Click on your bucket name to open it
2. Go to the **"Properties"** tab (at the top)
3. Scroll down to **"Static website hosting"**
4. Click **"Edit"**
5. Select **"Enable"**
6. **Index document:** Enter `index.html`
7. **Error document:** Enter `index.html` (this makes React Router work correctly)
8. Click **"Save changes"**

**Important:** Note the **"Bucket website endpoint"** URL (e.g., `http://your-bucket-name.s3-website-us-east-1.amazonaws.com`)

---

## Step 5: Set Bucket Policy (Allow Public Read Access)

1. Go to the **"Permissions"** tab
2. Scroll down to **"Bucket policy"**
3. Click **"Edit"**
4. Paste this JSON policy (replace `your-bucket-name` with your actual bucket name):

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

5. Click **"Save changes"**

---

## Step 6: Upload Files from Your `dist` Folder

### Option A: Upload All Files at Once (Recommended)

1. Go to the **"Objects"** tab in your bucket
2. Click **"Upload"** button
3. Click **"Add files"** or drag and drop
4. **Open your `dist` folder** and select:
   - `index.html`
   - The entire `assets` folder (or upload its contents)
5. Click **"Upload"** at the bottom

### Option B: Upload Folder Structure

**For the `assets` folder:**

1. Click **"Upload"**
2. Click **"Add folder"**
3. Navigate to your `dist` folder and select the `assets` folder
4. Click **"Upload"**

**For `index.html`:**

1. Click **"Upload"**
2. Click **"Add files"**
3. Navigate to `dist` and select `index.html`
4. Click **"Upload"**

### Important Upload Settings:

- **Storage class:** Keep as "Standard"
- **Permissions:** For each file/folder, you can set:
  - **Grant public-read access** (recommended for public website)
- **Properties:** Leave defaults unless you need specific metadata

---

## Step 7: Verify Your Files

1. In the **"Objects"** tab, you should see:

   ```
   index.html
   assets/
     ├── index-[hash].css
     ├── index-[hash].js
     └── videos/
         ├── 10 seconds 2nd section.mp4
         ├── 1st section LP drafr.mp4
         └── 52177-467701518_small.mp4
   ```

2. Click on `index.html` to verify it uploaded correctly

---

## Step 8: Access Your Website

1. Go back to **"Properties"** tab
2. Scroll to **"Static website hosting"**
3. Click on the **"Bucket website endpoint"** URL
4. Your website should now be live!

**Example URL format:**

```
http://your-bucket-name.s3-website-us-east-1.amazonaws.com
```

---

## Important Notes

### For HTTPS (SSL Certificate):

S3 static hosting only provides HTTP. For HTTPS:

1. Use **AWS CloudFront** (CDN) in front of your S3 bucket
2. CloudFront provides free SSL certificates
3. Or use your own domain with Route 53

### For Custom Domain:

1. Use **Route 53** to point your domain to the S3 bucket
2. Or use CloudFront with a custom domain

### Updating Your Website:

When you make changes:

1. Run `npm run build` again
2. Go to S3 bucket → **"Objects"** tab
3. **Delete old files** (or just upload new ones - they'll overwrite)
4. **Upload new files** from the updated `dist` folder

---

## Troubleshooting

**❌ 403 Forbidden Error:**

- Check bucket policy is set correctly
- Verify "Block public access" is disabled
- Ensure files have public-read permissions

**❌ 404 Not Found:**

- Verify `index.html` is in the root of the bucket
- Check static website hosting is enabled
- Verify index document is set to `index.html`

**❌ Assets/CSS/JS not loading:**

- Check file paths in uploaded files match the paths in `index.html`
- Verify `assets` folder structure is correct
- Check browser console for specific 404 errors

**❌ Videos not loading:**

- Verify video files are in `assets/videos/` folder
- Check file sizes aren't too large (S3 has limits)
- Verify video file formats are supported by browsers

---

## Quick Reference

**Your build folder location:**

```
/Users/essashah/Desktop/SWE/SCOUT ME ONLINE_2/dist
```

**What to upload:**

- `index.html` → Root of S3 bucket
- `assets/` folder → Root of S3 bucket

**File sizes to expect:**

- Videos can be large (MB to GB)
- CSS/JS files are typically KB
- Total upload may take time for large videos

---

Good luck! 🚀
