import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nieved.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://nieved.vercel.app/practice",
      lastModified: new Date(),
    },
    {
      url: "https://nieved.vercel.app/roadmap/web-dev",
      lastModified: new Date(),
    },
  ];
}
