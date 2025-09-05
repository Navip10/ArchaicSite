"use client"

import Link from "next/link"
import React from "react"

export function Callout({
  type = "note",
  children,
}: {
  type?: "note" | "tip" | "warn"
  children: React.ReactNode
}) {
  const map = {
    note: { border: "1px solid rgba(255,255,255,.08)", bg: "var(--obsidian-2)", label: "Note" },
    tip: { border: "1px solid rgba(0,200,150,.35)", bg: "rgba(0,200,150,.08)", label: "Tip" },
    warn: { border: "1px solid rgba(229,183,44,.35)", bg: "rgba(229,183,44,.08)", label: "Heads up" },
  }[type]
  return (
    <div
      className="rounded-md p-4 mt-4 mb-6"
      style={{ border: map.border, background: map.bg }}
      role="note"
      aria-label={map.label}
    >
      <div className="text-sm opacity-80 mb-2">{map.label}</div>
      <div className="prose">{children}</div>
    </div>
  )
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
}) {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-semibold px-4 py-2 transition"
  const primary = { background: "var(--gold)", color: "var(--obsidian)" } as const
  const secondary = { border: "1px solid var(--gold)", color: "var(--gold)" } as const
  const styles = variant === "primary" ? primary : secondary
  return (
    <Link href={href} className={base} style={styles}>
      {children}
    </Link>
  )
}

type AnchorProps = React.ComponentProps<"a"> & { href: string }

export function MdxLink(props: AnchorProps) {
  const { href, children, className, style, title, target, rel } = props
  const isExternal = /^https?:\/\//.test(href)

  if (isExternal) {
    return (
      <a
        href={href}
        className={className ?? "underline underline-offset-4"}
        style={{ textDecorationColor: "var(--gold)", ...(style || {}) }}
        title={title}
        target={target ?? "_blank"}
        rel={rel ?? "noreferrer"}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className={className ?? "underline underline-offset-4"}
      style={{ textDecorationColor: "var(--gold)", ...(style || {}) }}
      title={title}
    >
      {children}
    </Link>
  )
}
