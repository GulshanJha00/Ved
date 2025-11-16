export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nieved.vercel.app/sitemap.xml",
  };
}
