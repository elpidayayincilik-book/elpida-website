import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "fikzlrjofpjddcubqawa.supabase.co",
      "pbs.twimg.com",
      "jzixtbfuvspcnohqtzvi.supabase.co",
    ],

    remotePatterns: [
      new URL("https://fikzlrjofpjddcubqawa.supabase.co/storage/**"),
    ],
  },
  experimental: {
    useCache: true,
  },
};

export default nextConfig;
