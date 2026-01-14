/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/auth",
      destination: "/",
      permanent: false, // 307 redirect
    },
    {
      source: "/login",
      destination: "/",
      permanent: false, // 307 redirect
    },
    {
      source: "/register",
      destination: "/",
      permanent: false, // 307 redirect
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

export default nextConfig;
