"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState } from "react"
import MobileMenu from "./mobile-menu"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/vision", label: "The Archaic Verse" },
  { href: "/projects/escave", label: "Escave" },
  { href: "/projects/artifakt", label: "Artifakt" },
  { href: "/projects/marketplace", label: "Marketplace" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/5 bg-obsidian/70">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Archaic Home"
          className="group flex items-center gap-2"
        >
          <Image
            src="/brand/archaic-logo.png"
            alt="Archaic logo"
            width={80}
            height={80}
            priority
            className="w-30 h-auto"
          />
          <span className="sr-only">Archaic</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-gray-200"
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Nav Button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded border border-white/10"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {/* Mobile Menu Drawer */}
        <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
      </div>
    </header>
  )
}
