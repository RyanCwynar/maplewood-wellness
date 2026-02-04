import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/maplewood-wellness",
  assetPrefix: "/maplewood-wellness/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
