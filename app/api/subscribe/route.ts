import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    // support both form-encoded and JSON
    const contentType = req.headers.get("content-type") || ""
    let email = ""
    if (contentType.includes("application/json")) {
      const data = await req.json()
      email = data.email || ""
    } else {
      const form = await req.formData()
      email = (form.get("email") as string) || ""
    }

    if (!email) return NextResponse.json({ error: "Missing email" }, { status: 400 })

    // In production, store this in your ESP/audience. For now, log it.
    console.log("[subscribe] captured:", email)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[subscribe] error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
