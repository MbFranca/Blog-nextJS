import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'blog-strap.onrender.com'
            }
        ]
      }
};

export default nextConfig;
