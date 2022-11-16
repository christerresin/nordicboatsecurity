/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  env: {
    NEXT_PUBLIC_MAPS: process.env.NEXT_PUBLIC_MAPS,
    NEXT_PUBLIC_GOOGLE: process.env.NEXT_PUBLIC_GOOGLE,
  },
};

module.exports = nextConfig;
