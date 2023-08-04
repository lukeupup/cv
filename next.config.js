/** @type {import('next').NextConfig} */
const withYaml = require('next-plugin-yaml');

const nextConfig = {
  output: 'export',
  basePath: '/cv',
  images: { unoptimized: true },
};

if (process.env.NODE_ENV === 'development') {
  delete nextConfig.output;
  nextConfig.redirects = async () => {
    return [
      {
        source: '/',
        destination: '/cv',
        basePath: false,
        permanent: false,
      },
    ];
  };
}

module.exports = withYaml(nextConfig);
