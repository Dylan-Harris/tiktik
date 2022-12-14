/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'media.discordapp.net',
      'lh3.googleusercontent.com'
    ]
  },
  swcMinify: true,
}

module.exports = nextConfig
