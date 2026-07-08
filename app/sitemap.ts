import type { MetadataRoute } from "next";
import { modules } from "@/content/modules";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://learn.brusovcoach.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/curriculum`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/level/foundations`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/level/applied`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/level/advanced`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const moduleRoutes: MetadataRoute.Sitemap = modules
    .filter((m) => m.status === "published")
    .map((m) => ({
      url: `${SITE_URL}/module/${m.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...staticRoutes, ...moduleRoutes];
}
