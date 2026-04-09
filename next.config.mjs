/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,


  // https://images.unsplash.com/photo-1774270905958-86e7eaeae23d

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },

      // https://i.ibb.co.com/Gf6BtHNN/virat-kohli.avif
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/Gf6BtHNN/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
