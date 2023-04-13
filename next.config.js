/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    domains: ["placehold.jp"],
  },
};

module.exports = nextConfig;
