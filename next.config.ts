import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages
  output: "export",

  // Security headers only apply when running as a Next.js server (not static export).
  // For GitHub Pages, consider a reverse proxy or Cloudflare for HTTP headers.
};

export default nextConfig;
