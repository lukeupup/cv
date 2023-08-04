/** @type {import('next').NextConfig} */
const withYaml = require('next-plugin-yaml');

const nextConfig = {
  output: 'export',
  basePath: '/luke-cv',
  images: { unoptimized: true },
};

module.exports = withYaml(nextConfig);
