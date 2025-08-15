/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },

  async headers() {
    return [
      {
        //Use headers for all pages
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: `
                      default-src 'self';
                      script-src 'self';
                      style-src 'self' 'unsafe-inline';
                      img-src 'self' data:;
                      font-src 'self';
                      connect-src 'self';
                      frame-src 'none';
                      `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

// @ts-check
// import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

// export default (phaseT) => {
//     const isDev = phaseT === PHASE_DEVELOPMENT_SERVER
//     /**
//      * @type {import('next').NextConfig}
//      */
//     const nextConfig = {
//         trailingSlash: true,
//         output: "export",
//         images: {
//             unoptimized: true,
//         },
//         assetPrefix: isDev ? undefined : 'https://cdn.mydomain.com',
//     }
//     return nextConfig
// }
