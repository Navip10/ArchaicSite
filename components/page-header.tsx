import React from "react"

export default function PageHeader({
  title,
  description,
  eyebrow,
}: {
  title: string
  description?: string
  eyebrow?: string
}) {
  return (
    <header className="max-w-3xl">
      {eyebrow ? (
        <div className="mb-3 text-sm tracking-wide" style={{ color: "var(--gold)" }}>
          {eyebrow}
        </div>
      ) : null}
      <h1 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        {title}
      </h1>
      {description ? <p className="mt-3 text-gray-300">{description}</p> : null}
    </header>
  )
}
