import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const items = [
  {
    title: "Archaic Marketplace",
    desc: "Scan physical art in 3D, mint as NFT, and sell to collectors. The bridge between traditional art and Web3.",
    href: "/projects/marketplace",
  },
  {
    title: "Escave",
    desc: "AR riddles, object detection, and collectible 3D scans—your gamified gateway into the Archaic Verse.",
    href: "/projects/escave",
  },
  {
    title: "Artifakt",
    desc: "Real-time 3D product customization for e-commerce. Make buyers see—and believe—before they buy.",
    href: "/projects/artifakt",
  },
]

export default function FeatureGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3 mt-10">
      {items.map((it) => (
        <a key={it.title} href={it.href} className="block group">
          <Card className="bg-[#101820] border-white/10 group-hover:border-[var(--gold)] transition">
            <CardHeader>
              <CardTitle className="text-white">{it.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{it.desc}</p>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  )
}
