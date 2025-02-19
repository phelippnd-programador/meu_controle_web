import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns:
      [{
        hostname: "encrypted-tbn0.gstatic.com",

      }

      ], // Adicione os domínios que você quer permitir
  },
  reactStrictMode: false,
};

export default nextConfig;
