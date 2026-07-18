/**
 * Static export for GitHub Pages.
 *
 * The project site is served from https://<user>.github.io/mycoshield, so in a
 * production Pages build the app needs basePath/assetPrefix of "/mycoshield".
 * Local `next dev` and any root-domain host should stay at "/", so the prefix is
 * gated behind the PAGES_BASE_PATH env flag (set by the deploy workflow).
 */
const basePath = process.env.PAGES_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
