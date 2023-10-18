/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        destination: "https://cdn.splitbee.io/sb.js",
        source: "/sb.js",
      },
      {
        destination: "https://hive.splitbee.io/:slug",
        source: "/sb-api/:slug",
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

module.exports = nextConfig;
