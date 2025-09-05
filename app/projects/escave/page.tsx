import Section from "@/components/ui/section"
import Mdx from "@/components/mdx"
import PageHeader from "@/components/page-header"
import { getPageBySlug } from "@/lib/contentlayer"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { og } from "@/lib/seo"

export const metadata: Metadata = {
  ...og({
      title: "Escave — Archaic",
      description: "Mobile AR scavenger-hunt + riddles + 3D collectibles.",
      path: "/escave",
  })
}

export default function EscavePage() {
  const page = getPageBySlug("projects/escave")
  if (!page) return null
  return (
    <Section className="py-16">
      <PageHeader title={page.title} description={page.description} eyebrow="Projects" />
      <div className="mt-8"><Mdx code={page.body.code} /></div>
      <div className="mt-6">
        <Button asChild><a href="/contact">Download Now</a></Button>
      </div>
    </Section>
  )
}
