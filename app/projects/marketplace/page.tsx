import Section from "@/components/ui/section"
import Mdx from "@/components/mdx"
import PageHeader from "@/components/page-header"
import { getPageBySlug } from "@/lib/contentlayer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { og } from "@/lib/seo"

export const metadata: Metadata = {
 ...og({ 
    title: "Archaic Marketplace — Archaic",
    description: "3D-scanned digital twins for artists, powered by NFTs.",
    path: "/marketplace",
  })
}

export default function MarketplacePage() {
  const page = getPageBySlug("projects/marketplace")
  if (!page) return null
  return (
    <Section className="py-16">
      <PageHeader title={page.title} description={page.description} eyebrow="Projects" />
      <div className="mt-8"><Mdx code={page.body.code} /></div>

      <div className="mt-10 rounded border border-white/10 p-6" style={{ background: "var(--obsidian-2)" }}>
        <h2 className="text-xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>Join the waitlist</h2>
        <form className="mt-4 flex flex-col sm:flex-row gap-3" action="/api/subscribe" method="post">
          <Input name="email" type="email" placeholder="you@example.com" required />
          <Button type="submit">Notify me</Button>
        </form>
      </div>
    </Section>
  )
}
