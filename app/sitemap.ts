import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  // Minimal static sitemap. If you want to pull from Contentlayer, you can map over allPages here.
  const urls = [
    "/", "/about", "/vision",
    "/projects/marketplace", "/projects/escave", "/projects/artifakt",
    "/contact"
  ]
  const now = new Date()
  return urls.map((p) => ({
    url: new URL(p, siteUrl).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "/" ? 1 : 0.6,
  }))
}
