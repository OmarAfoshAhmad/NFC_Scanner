/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: '.next',
  output: 'standalone',

  // Images configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zdirmkypfxuamjbdkwhb.supabase.co',
      },
    ],
  },

  // Disable ESLint during build to fix serialization error
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react'],
    webpackBuildWorker: true,
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },

  webpack(config, { isServer }) {
    return config;
  },
};

export default nextConfig;
