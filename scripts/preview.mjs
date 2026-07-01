#!/usr/bin/env node
// Local preview of the deployed GitHub Pages site.
//
// Builds the static export (./out), serves it under the production basePath
// (/tue-ds-newsletter) via a temporary symlink root, and starts a static
// server. Mirrors what .github/workflows/deploy.yml produces on main.
//
// Usage: yarn preview [-- <serve-args, e.g. -l 4321>]

import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const BASE_PATH = "/tue-ds-newsletter";
const DEFAULT_PORT = 4321;

// project root = folder containing this file
const __filename = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(path.dirname(__filename), "..");
const outDir = path.join(projectRoot, "out");
const tmpRoot = path.join(os.tmpdir(), "tue-ds-preview");

function runBuild() {
  console.log("▶ Building static export (yarn build)...");
  const res = spawnSync(
    process.platform === "win32" ? "yarn.cmd" : "yarn",
    ["build"],
    { cwd: projectRoot, stdio: "inherit" },
  );
  if (res.status !== 0) {
    console.error("✘ build failed");
    process.exit(res.status ?? 1);
  }
}

function setupSymlinkRoot() {
  if (!fs.existsSync(path.join(outDir, "index.html"))) {
    console.error(`✘ ${outDir} has no index.html. Build may have failed.`);
    process.exit(1);
  }
  fs.rmSync(tmpRoot, { recursive: true, force: true });
  fs.mkdirSync(tmpRoot, { recursive: true });
  // out -> tmpRoot/tue-ds-newsletter
  const linkPath = path.join(tmpRoot, BASE_PATH);
  fs.symlinkSync(outDir, linkPath, "junction");
}

function startServer() {
  // Allow `yarn preview -- -l 5000` to override the port.
  const passedArgs = process.argv.slice(2);
  const args = passedArgs.length > 0 ? passedArgs : ["-l", String(DEFAULT_PORT)];

  console.log("\n▶ Serving preview at:");
  console.log(`   http://localhost:${DEFAULT_PORT}${BASE_PATH}/`);
  console.log("   (Ctrl+C to stop)\n");

  const child = spawn(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["--yes", "serve", tmpRoot, ...args],
    { stdio: "inherit", cwd: tmpRoot },
  );

  const stop = () => {
    child.kill();
    fs.rmSync(tmpRoot, { recursive: true, force: true });
    process.exit(0);
  };
  process.on("SIGINT", stop);
  process.on("SIGTERM", stop);
  child.on("exit", (code) => {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
    process.exit(code ?? 0);
  });
}

runBuild();
setupSymlinkRoot();
startServer();
