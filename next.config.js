/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    return config;
  },
  env: {
    MONGO_URL: 'mongodb+srv://hassan:hassan@cluster0.dtbyvbc.mongodb.net/?retryWrites=true&w=majority'
  },
  reactStrictMode: false,
}

module.exports = nextConfig
