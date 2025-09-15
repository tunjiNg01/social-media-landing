/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",

  // When exporting static HTML you must disable Next.js image optimization
  // so <Image /> renders regular image URLs that work in the static output.
  images: {
    unoptimized: true,
  },

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
