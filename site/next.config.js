/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Maiolix Tech',
    description: 'Maiolix Kasm workspace',
    icon: 'https://github.com/MAIOLIX/kasm-registry/edit/1.0/Maiolix2-logo-t.png',
    listUrl: 'https://github.com/MAIOLIX/kasm-registry',
    contactUrl: 'https://github.com/MAIOLIX/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
