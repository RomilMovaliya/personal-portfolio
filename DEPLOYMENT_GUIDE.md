# AWS Amplify Deployment Guide

Complete guide to deploying your portfolio on AWS Amplify for the hackathon.

## 📋 Prerequisites

- AWS Account (free tier eligible)
- GitHub account
- Your portfolio repository (must be public or have AWS access)
- Git installed locally

## 🚀 Step-by-Step Deployment

### Step 1: Set Up AWS Account

1. Go to [AWS Console](https://aws.amazon.com/)
2. Click "Create an AWS Account"
3. Follow the registration process
4. Verify your email and add payment method (free tier covers this project)

### Step 2: Push Code to GitHub

```bash
# Navigate to your portfolio directory
cd portfolio

# Initialize git (if not done already)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: AWS Portfolio for Hackathon"

# Create main branch
git branch -M main

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Access AWS Amplify

1. Log in to [AWS Console](https://console.aws.amazon.com/)
2. Search for "Amplify" in the search bar
3. Click on "AWS Amplify"
4. Click "Get Started" under "Amplify Hosting"

### Step 4: Connect Repository

1. Choose "GitHub" as your repository service
2. Click "Continue"
3. Authorize AWS Amplify to access your GitHub
4. Select your portfolio repository
5. Select the `main` branch
6. Click "Next"

### Step 5: Configure Build Settings

AWS Amplify should auto-detect Next.js. Verify these settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

This is already in your `amplify.yml` file, so Amplify will use it automatically.

1. Click "Next"
2. Review all settings
3. Click "Save and deploy"

### Step 6: Wait for Deployment

The deployment process takes 3-5 minutes:

1. ✅ Provision - AWS sets up resources
2. ✅ Build - Your app is built
3. ✅ Deploy - App is deployed to CloudFront CDN
4. ✅ Verify - Final checks

### Step 7: Get Your Live URL

Once deployed:
1. You'll see a URL like: `https://main.d1a2b3c4d5e6f7.amplifyapp.com`
2. Click the URL to view your live portfolio
3. Test all features, especially the secret console

### Step 8: Custom Domain (Optional)

To add a custom domain:

1. In Amplify Console, click "Domain management"
2. Click "Add domain"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for SSL certificate provisioning (automatic)

## 📸 Document Your Deployment

For the hackathon submission, take screenshots of:

1. **AWS Amplify Dashboard**
   - Shows your app is deployed
   - Displays the build status

2. **Build Details**
   - Shows successful build logs
   - Demonstrates AWS service usage

3. **CloudFront Distribution**
   - Go to CloudFront in AWS Console
   - Screenshot your distribution

4. **Live Website**
   - Homepage
   - Secret console in action
   - Mobile responsive view

## 🔄 Continuous Deployment

AWS Amplify automatically rebuilds when you push to GitHub:

```bash
# Make changes locally
git add .
git commit -m "Update: Added new project"
git push

# Amplify automatically detects and deploys changes
```

## ⚙️ Environment Variables (If Needed)

If your app needs environment variables:

1. In Amplify Console, go to "Environment variables"
2. Click "Manage variables"
3. Add key-value pairs
4. Redeploy your app

## 🔍 Monitoring & Logs

### View Build Logs
1. Click on a build in Amplify Console
2. Expand each phase to see detailed logs
3. Use logs to debug any issues

### Access Metrics
1. Go to "Monitoring" tab
2. View requests, data transferred, errors
3. Track performance

## 🛠️ Troubleshooting

### Build Fails

**Error**: Module not found
```bash
# Solution: Ensure all dependencies in package.json
npm install
git add package.json package-lock.json
git commit -m "Fix: Update dependencies"
git push
```

**Error**: Build timeout
```bash
# Solution: Optimize build in amplify.yml
# Increase Node memory (add to build commands):
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Site Not Loading

1. Check build completed successfully
2. Wait a few minutes for CDN propagation
3. Clear browser cache
4. Try incognito mode

### Console Not Working

1. Check browser console for JavaScript errors
2. Ensure all component files are committed
3. Test locally first with `npm run dev`

## 💰 Cost Management

Your portfolio should stay in **AWS Free Tier**:

- **Amplify Hosting**: 1000 build minutes/month free
- **CloudFront**: 50GB data transfer/month free
- **Route 53**: $0.50/month for hosted zone (if using custom domain)

### Monitor Costs
1. Go to AWS Billing Dashboard
2. Set up billing alerts
3. Monitor usage regularly

## 📝 Hackathon Submission Checklist

- [ ] Portfolio deployed successfully
- [ ] Live URL is accessible
- [ ] All features work (including secret console)
- [ ] Responsive on mobile
- [ ] GitHub repository is public
- [ ] README updated with deployment info
- [ ] Screenshots taken of AWS setup
- [ ] Project description written
- [ ] AWS services documented

## 🎓 AWS Services Documentation

Document these in your hackathon submission:

### Services Used:
1. **AWS Amplify Hosting**
   - Purpose: Host and deploy Next.js application
   - Configuration: Continuous deployment from GitHub

2. **Amazon CloudFront**
   - Purpose: Global CDN for fast content delivery
   - Benefit: Low latency for users worldwide

3. **AWS Certificate Manager**
   - Purpose: Automatic SSL/TLS certificates
   - Benefit: Secure HTTPS connections

4. **Amazon Route 53** (if custom domain)
   - Purpose: DNS management
   - Configuration: Domain routing to Amplify

## 🔗 Useful Links

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Next.js on Amplify Guide](https://docs.amplify.aws/guides/hosting/nextjs)
- [AWS Free Tier Details](https://aws.amazon.com/free/)
- [Amplify Pricing](https://aws.amazon.com/amplify/pricing/)

## ✅ Final Verification

Before submitting:

1. ✅ Open your live URL in multiple browsers
2. ✅ Test on mobile device
3. ✅ Try the secret console (`Ctrl + \``)
4. ✅ Check all navigation links
5. ✅ Verify contact form works
6. ✅ Test project links
7. ✅ Confirm AWS services are documented

---

Your portfolio is now live on AWS! Share your URL and good luck with the hackathon! 🎉
