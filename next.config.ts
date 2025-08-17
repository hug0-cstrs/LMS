import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hugo-lms.fly.storage.tigris.dev",
      },
    ],
  },
};

export default nextConfig;
