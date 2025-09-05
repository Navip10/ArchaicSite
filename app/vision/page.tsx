import Section from "@/components/ui/section"
import Mdx from "@/components/mdx"
import PageHeader from "@/components/page-header"
import { getPageBySlug } from "@/lib/contentlayer"
import type { Metadata } from "next"
import { og } from "@/lib/seo"

export const metadata: Metadata = {
  ...og({ 
      title: "The Archaic Verse — Archaic",
      description: "Our roadmap to a unified ecosystem.",
      path: "/vision",
  }),
}

export default function VisionPage() {
  const page = getPageBySlug("vision")
  if (!page) return null
  return (
    <Section className="py-16">
      <PageHeader title={page.title} description={page.description} eyebrow="Vision" />
      <div className="mt-8"><Mdx code={page.body.code} /></div>
    </Section>
  )
}
