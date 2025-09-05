import Link from "next/link"

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        Page not found
      </h1>
      <p className="text-gray-300">We couldn’t find what you’re looking for.</p>
      <div className="mt-6">
        <Link href="/" className="btn-primary">Back to Home</Link>
      </div>
    </div>
  )
}
