# Deployment Guide

## Vercel Deployment

### Prerequisites
- Vercel account (https://vercel.com)
- GitHub repository connected to Vercel

### Deployment Steps

1. **Connect Repository to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel will automatically detect the project settings

2. **Configure Environment Variables**
   - Go to your project settings on Vercel
   - Navigate to "Settings" > "Environment Variables"
   - Add any required environment variables (if needed)
   - Current setup doesn't require any mandatory environment variables

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically run `pnpm build` and start the server
   - Your site will be live at `https://<project>.vercel.app`

4. **Automatic Deployments**
   - Every push to your main branch will trigger a new deployment
   - Preview deployments are created for pull requests

### Build Configuration

The `vercel.json` file is already configured with:
- Build command: `pnpm build` (builds both client SPA and Node.js server)
- Install command: `pnpm install`
- Framework: Vite

### Project Structure

```
.
├── client/                  # React SPA frontend
├── server/                  # Express server
├── shared/                  # Shared types
├── dist/
│   ├── spa/                # Built frontend files
│   └── server/             # Built server files
├── package.json
├── vercel.json             # Vercel configuration
└── .vercelignore           # Files to ignore during deployment
```

### Build Output

- **Client**: Built to `dist/spa/`
- **Server**: Built to `dist/server/`
- **Entry Point**: `dist/server/production.mjs`

The server automatically:
1. Serves the static SPA files from `dist/spa/`
2. Handles all API routes under `/api/`
3. Serves `index.html` for all non-API routes (React Router compatibility)

### Monitoring Deployments

- View deployment logs in Vercel dashboard
- Check real-time logs: https://vercel.com/docs/observability

### Troubleshooting

**Build Fails**
- Ensure `pnpm install` works locally
- Check that `pnpm build` completes without errors
- Verify all TypeScript types are correct

**Port Issues**
- Server uses `PORT` environment variable (default: 3000)
- Vercel automatically assigns ports

**404 on Routes**
- The server is configured to serve `index.html` for all non-API routes
- This enables React Router client-side routing to work properly

### Performance Optimization

For better performance on Vercel:
1. Static assets are cached automatically
2. SPA build is optimized with Vite
3. Consider adding `npm run build` hooks if needed

### Custom Domain

To use a custom domain:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

For more information, visit [Vercel Docs](https://vercel.com/docs)
