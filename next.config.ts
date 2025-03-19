import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    API_URL: 'https://mango.881103.xyz',
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['mango.881103.xyz'],
    },
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://mango.881103.xyz/:path*',
      },
    ];
  },
};

export default nextConfig;
