import { allPages, type Page } from ".contentlayer/generated"
export function getPageBySlug(slug: string): Page | undefined {
  return allPages.find((p) => p.slug === slug)
}
