import Link from "next/link"

export function CTA() {
  return (
    <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
      <Link href="/projects/escave" className="btn-primary">Explore Escave</Link>
      <Link href="/projects/artifakt" className="btn-secondary">Discover Artifakt</Link>
      <Link href="/vision" className="text-sm underline underline-offset-4" style={{ textDecorationColor: "var(--gold)" }}>
        What is the Archaic Verse?
      </Link>
    </div>
  )
}
