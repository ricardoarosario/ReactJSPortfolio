export default async function sitemap() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000');

  return ['/'].map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
  }));
}
