# Vercel Deployment - Quick Start

Your GOMONOVIA app is now ready to deploy to Vercel! Follow these simple steps:

## Step 1: Push Code to GitHub

```bash
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

## Step 2: Deploy on Vercel

**Option A: Using Vercel Dashboard (Easiest)**

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Vercel will automatically detect the configuration
5. Click "Deploy"

**Option B: Using Vercel CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts and your app will be deployed!

## Step 3: Done! 🎉

Your site will be live at `https://<project-name>.vercel.app`

### What Vercel Does Automatically

- ✅ Installs dependencies with `pnpm`
- ✅ Builds client (React SPA) → `dist/spa/`
- ✅ Builds server (Node.js) → `dist/server/`
- ✅ Starts the server to serve everything
- ✅ Sets up automatic deployments on every push to main
- ✅ Creates preview deployments for pull requests

## Configuration Files

The following files handle the Vercel deployment:

- **`vercel.json`** - Vercel build configuration
- **`.vercelignore`** - Files to exclude from deployment
- **`package.json`** - Build and start scripts

## Environment Variables (If Needed)

If you need to add environment variables in the future:

1. Go to your Vercel project → Settings → Environment Variables
2. Add your variables
3. Redeploy

## Troubleshooting

**Build Failed?**
- Check the build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Verify all dependencies are in package.json

**App Not Loading?**
- Check that the server is running (port assignment is automatic)
- Review logs in Vercel dashboard
- Ensure dist/spa contains the built frontend

**Need Help?**
- Check DEPLOYMENT.md for detailed configuration
- Visit https://vercel.com/docs for Vercel documentation

---

That's it! Your app is deployment-ready. 🚀
