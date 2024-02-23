/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: "placehold.jp",
      port: '',
    },
      {
        protocol: 'https',
        hostname: "images.microcms-assets.io",
        port: '',
      }],
  },
  typescript: {
    // Next の fetch が node の fetch と認識されてビルドエラーが起きるため、それを防止する
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
