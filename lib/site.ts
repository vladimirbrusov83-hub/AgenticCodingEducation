// The canonical address of the site, used for metadata, sitemap, robots, and JSON-LD.
// Set NEXT_PUBLIC_SITE_URL in Vercel once a custom domain is connected. Until then it
// falls back to the deployment's own production URL, so no dead host is ever advertised.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
