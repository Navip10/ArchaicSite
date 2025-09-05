import Section from "@/components/ui/section"
import Mdx from "@/components/mdx"
import PageHeader from "@/components/page-header"
import { getPageBySlug } from "@/lib/contentlayer"
import type { Metadata } from "next"
import { og } from "@/lib/seo"

export const metadata: Metadata = {
...og({
        title: "About — Archaic",
        description: "Who we are and what we’re building.",
        path: "/about",
  }),
}

export default function AboutPage() {
  const page = getPageBySlug("about")

  if (!page) {
    return (
      <Section className="py-16">
        <PageHeader title="About" description="Who we are and what we’re building." />
        <div className="mt-8 text-red-400">
          MDX content not found. Ensure <code>content/about.mdx</code> exists and Contentlayer generated.
        </div>
      </Section>
    )
  }

  return (
    <Section className="py-16">
      <PageHeader title={page.title} description={page.description} eyebrow="About" />
      <div className="mt-8"><Mdx code={page.body.code} /></div>
    </Section>
  )
}
