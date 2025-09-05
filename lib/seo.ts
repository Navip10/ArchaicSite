// lib/seo.ts
export const SITE_NAME = "Archaic"
export const SITE_TAGLINE =
  "An ecosystem where art, play, and commerce converge through 3D, AR, and blockchain."

// IMPORTANT: set NEXT_PUBLIC_SITE_URL in .env.local / Vercel
export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "")

type OgInput = { title: string; description?: string; path?: string }

/**
 * Returns a Next.js Metadata-shaped object with OG/Twitter defaults.
 * Note: we intentionally return MUTABLE arrays (no `as const`) to satisfy Next's types.
 */
export function og({ title, description = SITE_TAGLINE, path = "/" }: OgInput) {
  const url = new URL(path || "/", siteUrl).toString()
  const imageUrl = `${siteUrl}/og-default.png`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      // leaving off `type` to keep types simple; add `type: "website"` if you prefer
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl], // must be a mutable string[] per types
    },
  }
}
