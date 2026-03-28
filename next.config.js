/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Reduziert kaputte vendor-chunks für framer-motion (Header) bei Dev/OneDrive.
    serverComponentsExternalPackages: ['framer-motion'],
  },
  async redirects() {
    return [
      { source: '/branche', destination: '/branchen', permanent: true },
      { source: '/branche/', destination: '/branchen', permanent: true },
    ]
  },
  // Performance
  compress: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  // optimizePackageImports für framer-motion deaktiviert – verursacht sonst
  // "Cannot find module './vendor-chunks/framer-motion.js'" bei SSR (Blog, Header).
}

module.exports = nextConfig
