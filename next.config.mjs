/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next',
  output: 'standalone',

  // Disable ESLint during build to fix serialization error
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable static page generation
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
