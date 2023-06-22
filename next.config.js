/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: 'FredyVelasquez',
    mongodb_password: 'SanIsidro31.',
    mongodb_clustername: 'cluster0',
    mongodb_database: 'my-site'
  }
}

module.exports = nextConfig
