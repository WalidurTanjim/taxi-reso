/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        // port: '',
        pathname: '/images/media/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        // port: '',
        pathname: '/api/portraits/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
