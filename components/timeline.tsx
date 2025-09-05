export default function Timeline() {
    const items = [
      { label: "Now", points: ["Escave Launch & content pipeline", "Artifakt demos for brands", "Marketplace architecture"]},
      { label: "Next", points: ["Creator onboarding for Marketplace", "Escave rollout", "Artifakt SDK for e-commerce"]},
      { label: "Future", points: ["Archaic Verse unified identity", "Cross-utility for assets", "On-chain interoperability"]},
    ]
    return (
      <div className="grid gap-6 md:grid-cols-3 mt-10">
        {items.map((box) => (
          <div key={box.label} className="rounded border border-white/10 p-5" style={{ background: "var(--obsidian-2)" }}>
            <div className="font-[var(--font-space-grotesk)] text-lg" style={{ color: "var(--gold)" }}>{box.label}</div>
            <ul className="mt-3 list-disc list-inside text-gray-200 space-y-2">
              {box.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    )
  }
  