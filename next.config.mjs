/** @type {import('next').NextConfig} */
const nextConfig = {};


nextConfig.images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "www.themealdb.com",
      port: "",
      pathname: "/images/media/meals/**",
    },
  ],
};


export default nextConfig;
