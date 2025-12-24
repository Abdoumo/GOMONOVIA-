import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "./index";
import * as express from "express";
import fs from "fs";

const app = createServer();
const port = process.env.PORT || 3000;

// In production, serve the built SPA files
// Use multiple strategies to find the dist/spa directory
let distPath: string;

const currentDir = process.cwd();
const possiblePaths = [
  path.join(currentDir, "dist/spa"),
  path.join(currentDir, "../dist/spa"),
  path.join(import.meta.dirname, "../spa"),
];

// Find the first valid path
for (const possiblePath of possiblePaths) {
  if (fs.existsSync(possiblePath)) {
    distPath = possiblePath;
    break;
  }
}

if (!distPath) {
  console.error("❌ ERROR: Could not find dist/spa directory");
  console.error("Possible paths checked:", possiblePaths);
  process.exit(1);
}

console.log(`📁 Serving static files from: ${distPath}`);

// Serve static files with proper headers
app.use(
  express.static(distPath, {
    etag: false,
    lastModified: false,
    setHeaders: (res, path) => {
      // Cache static assets (JS, CSS, images)
      if (path.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2)$/)) {
        res.set("Cache-Control", "public, max-age=31536000");
      } else {
        // Don't cache HTML files
        res.set("Cache-Control", "no-cache, no-store, must-revalidate");
      }
    },
  })
);

// Handle React Router - serve index.html for all non-API routes
app.get("*", (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }

  const indexPath = path.join(distPath, "index.html");
  if (fs.existsSync(indexPath)) {
    res.set("Cache-Control", "no-cache, no-store, must-revalidate");
    res.sendFile(indexPath);
  } else {
    console.error(`❌ index.html not found at: ${indexPath}`);
    res.status(500).json({ error: "Frontend not available" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
