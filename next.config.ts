import type { NextConfig } from "next";

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
  // Set basePath/assetPrefix for project site hosted at /bricksInfraspace
  basePath: "/bricksInfraspace",
  assetPrefix: "/bricksInfraspace",
};

export default nextConfig;
