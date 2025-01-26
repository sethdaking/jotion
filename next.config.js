/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["files.edgestore.dev"], // Fixed: changed "domain" to "domains"
  },
};

module.exports = nextConfig;
