/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = withMDX({
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
    webpackBuildWorker: true, // تفعيل عامل Webpack صراحة لتجنب مشاكل MDX
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'], // التعرف على ملفات MDX كصفحات

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
    // أي تخصيصات Webpack إضافية هنا
    return config;
  },
});

module.exports = nextConfig;
