const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.linkaraby.com",
      },
      {
        protocol: "https",
        hostname: "ae01.alicdn.com",
      },
      {
        protocol: "https",
        hostname: "p-pc.ppwebstatic.com",
      },
      {
        protocol: "https",
        hostname: "cdn.salla.sa",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
