/** @type {import('next').NextConfig} */
const { NEXT_PUBLIC_STRAPI_ENDPOINT } = process.env;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: [new URL(NEXT_PUBLIC_STRAPI_ENDPOINT).hostname],
  },
});
