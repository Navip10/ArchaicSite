"use client"

import Link from "next/link"
import { X } from "lucide-react"

export default function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean
  onClose: () => void
  links: { href: string; label: string }[]
}) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-obsidian-2 p-6 shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <span className="font-display text-lg">Menu</span>
          <button className="p-2 rounded hover:bg-white/5" onClick={onClose} aria-label="Close menu">
            <X size={18} />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={onClose} className="text-gray-100 text-base">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
