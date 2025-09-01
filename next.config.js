/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL || 'http://localhost:8000'
  },
  images: {
    domains: ['via.placeholder.com'],
  }
}
