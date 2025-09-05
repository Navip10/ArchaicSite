import Section from "@/components/ui/section"
import { CTA } from "@/components/cta"
import FeatureGrid from "@/components/feature-grid"
import Timeline from "@/components/timeline"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <div
        className="border-b border-white/5"
        style={{ background: "radial-gradient(ellipse at top, rgba(229,183,44,0.12), transparent 60%)" }}
      >
        <Section className="py-20 text-center">
          <p className="tracking-wide" style={{ color: "var(--gold)", fontFamily: "var(--font-space-grotesk)" }}>
            Building the Archaic Verse | Carry The World In Your Pockets
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            An ecosystem where art, play, and commerce converge through 3D, AR, and blockchain.
          </h1>
          <CTA />
        </Section>
      </div>

      {/* FEATURE GRID */}
      <Section className="py-16">
        <FeatureGrid />
      </Section>

      {/* EXPLAINER */}
      <Section className="py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>Archaic builds the Archaic Verse</h2>
            <p className="mt-3 text-gray-200">
              Archaic is a tech company merging the physical and digital worlds through 3D, AR, and blockchain-powered experiences.
              Our ventures include the Archaic Marketplace (artists sell 3D-scanned NFTs), Escave (AR scavenger-hunt game), and Artifakt (3D e-commerce customization).
              Together they form the Archaic Verse, redefining how people create, play, and own.
            </p>
          </div>
          <div className="rounded border border-white/10 p-6" style={{ background: "var(--obsidian-2)" }}>
            <h3 style={{ color: "var(--gold)", fontFamily: "var(--font-space-grotesk)" }}>The Loop</h3>
            <ol className="mt-3 list-decimal list-inside text-gray-200 space-y-1">
              <li>Artists → Marketplace → 3D Assets</li>
              <li>Players (Escave) engage with assets and earn collectibles</li>
              <li>Brands (Artifakt) enable 3D customization and utility</li>
              <li>Shared ownership/utility flows back to artists</li>
            </ol>
          </div>
        </div>
      </Section>

      {/* ROADMAP */}
      <Section className="py-16">
        <h2 className="text-2xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>Roadmap</h2>
        <Timeline />
      </Section>

      {/* EMAIL CAPTURE */}
      <Section className="py-16">
        <div className="rounded border border-white/10 p-6" style={{ background: "var(--obsidian-2)" }}>
          <h3 className="text-xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>Get updates</h3>
          <p className="text-gray-300 mt-1">News on Escave, Artifakt, and the Archaic Marketplace.</p>
          <form className="mt-4 flex flex-col sm:flex-row gap-3" action="/api/subscribe" method="post">
            <Input name="email" type="email" placeholder="you@example.com" required />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-xs text-gray-400 mt-2">We’ll send occasional updates. Unsubscribe anytime.</p>
        </div>
      </Section>
    </div>
  )
}
