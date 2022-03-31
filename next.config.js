/** @type {import('next').NextConfig} */
const { NEXT_PUBLIC_STRAPI_ENDPOINT } = process.env;
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [new URL(NEXT_PUBLIC_STRAPI_ENDPOINT).hostname],
  },
};

module.exports = nextConfig;
