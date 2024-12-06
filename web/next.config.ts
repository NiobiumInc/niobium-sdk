import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/niobium-sdk',
  assetPrefix: '/niobium-sdk/',
  trailingSlash: true,
};

export default nextConfig;
