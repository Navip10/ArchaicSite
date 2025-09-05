import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-obsidian-2">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-lg text-gold">Archaic</div>
          <p className="mt-2 text-sm text-gray-300">
            Archaic builds the Archaic Verse—an ecosystem where art, play, and commerce converge through 3D, AR, and blockchain.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-2">
            <li><Link className="hover:opacity-80" href="/about">About</Link></li>
            <li><Link className="hover:opacity-80" href="/vision">The Archaic Verse</Link></li>
            <li><Link className="hover:opacity-80" href="/contact">Contact</Link></li>
            <li><Link className="hover:opacity-80" href="/(legal)/privacy">Privacy</Link></li>
            <li><Link className="hover:opacity-80" href="/(legal)/terms">Terms</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-2">Social</div>
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com/archaic.app" aria-label="Instagram" className="hover:text-gold"><Instagram size={18} /></Link>
            <Link href="https://x.com/archaic.app" aria-label="X / Twitter" className="hover:text-gold"><Twitter size={18} /></Link>
            <Link href="https://linkedin.com/" aria-label="LinkedIn" className="hover:text-gold"><Linkedin size={18} /></Link>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 pb-8">© {new Date().getFullYear()} Archaic. All rights reserved.</div>
    </footer>
  )
}
