import type { NextConfig } from "next";

/**
 * Next.js configuration.
 *
 * `output: "standalone"` produces a minimal, self-contained server bundle
 * under `.next/standalone` for the Docker image's final stage to copy in.
 *
 * This is deliberately conditional on `DOCKER_BUILD`, set only by the
 * Dockerfile's builder stage. Netlify's Next.js adapter (`@netlify/
 * plugin-nextjs`, OpenNext-based) reads Next's *normal* build output and
 * transforms it into Netlify Functions itself — `output: "standalone"`
 * changes that output shape and breaks it (a documented "Page Not Found"
 * failure mode on Netlify). Since this project deploys to both Docker and
 * Netlify from the same codebase, standalone mode can only be turned on
 * for the Docker path, never for a Netlify build.
 */
const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
