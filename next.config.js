/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ['fm.soundzmuzicradio.com'],
  },
}

module.exports = nextConfig
