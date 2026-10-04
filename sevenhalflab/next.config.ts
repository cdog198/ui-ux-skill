import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes the site to /out as plain files for any static host.
  output: "export",
  // Matches the old WordPress URLs (/film/lento/), so existing links keep working.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
