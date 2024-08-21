/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'sunchase.backend.aait-d.com',
            port: '',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
