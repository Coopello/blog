/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    domains: ["placehold.jp", "images.microcms-assets.io"],
  },
  typescript: {
    // Next の fetch が node の fetch と認識されてビルドエラーが起きるため、それを防止する
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
