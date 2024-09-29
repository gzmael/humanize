/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 's6.imgcdn.dev', protocol: 'https' }],
  },
}

export default nextConfig
