import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes the whole site to /out as plain HTML/CSS/JS,
  // ready for Cloudflare (or any static host). Every page here is pre-rendered.
  output: "export",
  images: {
    // No image server on a static host, so local images are served as-is.
    // Unsplash images are still resized by Unsplash's CDN (see components/ui/Photo.tsx).
    unoptimized: true,
  },
};

export default nextConfig;
