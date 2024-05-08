const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/mehrigiyo",
  i18n,
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i3.ytimg.com",
        pathname: "**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
