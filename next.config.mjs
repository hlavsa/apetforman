/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Ensure this is set for App Router
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
