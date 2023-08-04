/** @type {import('next').NextConfig} */
const withYaml = require('next-plugin-yaml');

const nextConfig = {
  output: 'export',
  basePath: '/nextjs-github-pages',
  images: { unoptimized: true },
};

module.exports = withYaml(nextConfig);
