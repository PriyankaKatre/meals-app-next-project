/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        allowedOrigins: ['localhost:3000', 'glorious-space-tribble-gx64569g599f9p5x-3000.app.github.dev'],
        allowedForwardedHosts: ['localhost:3000', 'glorious-space-tribble-gx64569g599f9p5x-3000.app.github.dev'],
      },
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: process.env.NODE_ENV === 'production' ? 'https://your-production-domain.com' : 'http://localhost:3000',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'X-Requested-With, X-Forwarded-Host, Content-Type, Accept',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  