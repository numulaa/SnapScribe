import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**", // Adjust the pathname if necessary to be more specific
        search: "", // Leave this empty unless you need to match specific query parameters
      },
    ],
  },
};

export default nextConfig;
