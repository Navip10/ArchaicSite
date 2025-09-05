import { allPages } from "contentlayer/generated"
import Mdx from "@/components/mdx"
import type { Metadata } from "next"
import Section from "@/components/ui/section"
import { og } from "@/lib/seo"

export const dynamic = "force-dynamic"
export const revalidate = 0

export const metadata: Metadata = {
  ...og({
    title: "Artifakt — Archaic",
    description: "Real-time 3D product customization for e-commerce.",
    path: "/projects/artifakt",
  }),
}

export default function ArtifaktPage() {
  const page = allPages.find((p) => p._raw.flattenedPath === "projects/artifakt")
  if (!page) return <div className="p-6">Content not found.</div>

  return (
    <Section className="py-16">
      <Mdx code={page.body.code} />
    </Section>
  )
}
