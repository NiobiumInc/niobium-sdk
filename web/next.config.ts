import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/niobium-sdk',
  assetPrefix: '/niobium-sdk/',
};

export default nextConfig;
