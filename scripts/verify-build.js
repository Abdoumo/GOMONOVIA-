#!/usr/bin/env node

import fs from "fs";
import path from "path";

console.log("🔍 Verifying build structure...\n");

const checks = [
  {
    name: "dist/spa/index.html",
    path: "dist/spa/index.html",
    critical: true,
  },
  {
    name: "dist/spa/assets (JS/CSS)",
    path: "dist/spa/assets",
    critical: true,
    isDir: true,
  },
  {
    name: "dist/server/production.mjs",
    path: "dist/server/production.mjs",
    critical: true,
  },
  {
    name: "dist/server/production.mjs.map",
    path: "dist/server/production.mjs.map",
    critical: false,
  },
];

let allGood = true;

for (const check of checks) {
  const fullPath = path.resolve(check.path);
  const exists = fs.existsSync(fullPath);

  if (check.isDir) {
    const isDir = exists && fs.statSync(fullPath).isDirectory();
    const hasFiles =
      isDir && fs.readdirSync(fullPath).length > 0;

    if (hasFiles) {
      console.log(`✅ ${check.name}`);
    } else if (check.critical) {
      console.error(`❌ ${check.name} - NOT FOUND or EMPTY`);
      allGood = false;
    } else {
      console.warn(`⚠️  ${check.name} - Optional, not found`);
    }
  } else {
    if (exists) {
      const size = (fs.statSync(fullPath).size / 1024).toFixed(2);
      console.log(`✅ ${check.name} (${size} KB)`);
    } else if (check.critical) {
      console.error(`❌ ${check.name} - NOT FOUND`);
      allGood = false;
    } else {
      console.warn(`⚠️  ${check.name} - Optional, not found`);
    }
  }
}

console.log("\n" + "=".repeat(50));

if (allGood) {
  console.log("✅ Build verification passed!");
  console.log("\n🚀 Your app is ready to deploy!\n");
  process.exit(0);
} else {
  console.error("❌ Build verification failed!");
  console.error(
    "\nRun: pnpm build\n"
  );
  process.exit(1);
}
