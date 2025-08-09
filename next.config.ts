import type { NextConfig } from "next";

const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",
  trailingSlash: true,
  images: {
    // Disable image optimization since GitHub Pages is static-only
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "drive.google.com" },
    ],
  },
  // Configure basePath and assetPrefix for project sites (e.g., /<repo>) when provided via env var
  ...(basePathEnv
    ? {
        basePath: basePathEnv,
        assetPrefix: `${basePathEnv}/`,
      }
    : {}),
};

export default nextConfig;
