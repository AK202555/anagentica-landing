/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/anagentica-landing',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
