import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["jzixtbfuvspcnohqtzvi.supabase.co", "pbs.twimg.com"],

    remotePatterns: [
      new URL("https://jzixtbfuvspcnohqtzvi.supabase.co/storage/**"),
    ],
  },
};

export default nextConfig;
