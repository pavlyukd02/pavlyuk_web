/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: { unoptimized: true }
}

module.exports = nextConfig
