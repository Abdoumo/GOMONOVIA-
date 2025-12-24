# Fly.io Deployment Guide

## Quick Fix for 404 Issues

If you're getting a 404 error on your Fly.io deployment, follow these steps:

### Step 1: Update Your Deployment

The server configuration has been fixed to properly locate and serve the built frontend files.

Make sure to:

```bash
git add .
git commit -m "Fix: Improve server path resolution for Fly.io deployment"
git push origin main
```

### Step 2: Redeploy

If you have Fly CLI installed:

```bash
fly deploy --remote-only
```

Or push to your repository (if connected):
- The deployment will automatically trigger
- Fly.io will rebuild and redeploy

### Step 3: Monitor Deployment

```bash
fly logs
```

You should see:
```
📁 Serving static files from: /app/dist/spa
🚀 Fusion Starter server running on port 3000
```

## What Was Fixed

The Express server now:
1. ✅ Properly finds the `dist/spa` directory even in containerized environments
2. ✅ Serves static files with correct cache headers
3. ✅ Handles all non-API routes with `index.html` (SPA routing)
4. ✅ Includes health check endpoint at `/health`
5. ✅ Better error logging for debugging

## File Structure on Fly.io

After build, your app structure is:

```
/app/
├── dist/
│   ├── spa/          # Built React frontend
│   │   ├── index.html
│   │   ├── assets/   # JS/CSS/images
│   │   └── ...
│   └── server/
│       └── production.mjs  # Built Node.js server
├── node_modules/
├── package.json
└── fly.toml
```

## Troubleshooting

### Still Getting 404?

Check Fly logs:
```bash
fly logs
```

Look for the line: `📁 Serving static files from: ...`

If it says the path doesn't exist, the build didn't complete correctly:
```bash
fly ssh console
ls -la /app/dist/
```

### Rebuild Everything

If nothing works:
```bash
fly deploy --remote-only --build-only
```

Then check logs:
```bash
fly logs -n 100
```

## Production Checklist

- [x] Build script includes both client and server: `npm run build`
- [x] Server correctly serves static files from `dist/spa`
- [x] SPA routing redirects unknown routes to `index.html`
- [x] API routes at `/api/*` are separate from static files
- [x] Health check endpoint at `/health` works
- [x] Environment variables configured (if needed)
- [x] Proper cache headers for static assets

## Custom Domain

To add a custom domain:

```bash
fly certs create yourdomain.com
```

Then update your DNS records following Fly's instructions.

## Monitoring

View app status:
```bash
fly status
```

View logs:
```bash
fly logs
```

Check metrics:
```bash
fly logs -f  # follow live logs
```

## Scale Your App

For more capacity:
```bash
fly scale vm --cpus 2 --memory 512
```

For more instances:
```bash
fly scale count 3
```

---

The app should now work properly! If you still see 404 errors, check the logs above.
