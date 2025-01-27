/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/graphql/:path*',
          destination: 'https://api.andromedaprotocol.io/graphql/dev/:path*',
        },
      ];
    },
  };
  
  module.exports = nextConfig;