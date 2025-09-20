/** @type {import("next").NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'climatbh-site-frontend.onrender.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

