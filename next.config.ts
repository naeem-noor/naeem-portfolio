import type { NextConfig } from "next";

/**
 * Next.js configuration.
 *
 * `output: "standalone"` produces a minimal, self-contained server bundle
 * under `.next/standalone`, which is what the production Docker image copies
 * into the final runtime stage. This keeps the shipped image small and free
 * of the full `node_modules` tree.
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
