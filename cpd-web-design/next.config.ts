import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local images (e.g. /public/images/me.jpg) go through Next's optimiser.
    // Unsplash images use their own CDN via a custom loader (see components/ui/Photo.tsx).
    qualities: [70, 75],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
