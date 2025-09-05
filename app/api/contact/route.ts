import { NextResponse } from "next/server"

export const runtime = "nodejs"

function isEmail(x: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x)
}

export async function POST(req: Request) {
  try {
    const ct = req.headers.get("content-type") || ""
    let name = "", email = "", message = ""

    if (ct.includes("application/json")) {
      const data = await req.json()
      name = data?.name || ""
      email = data?.email || ""
      message = data?.message || ""
    } else {
      const form = await req.formData()
      name = (form.get("name") as string) || ""
      email = (form.get("email") as string) || ""
      message = (form.get("message") as string) || ""
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    const to = process.env.CONTACT_TO_EMAIL || "owner@example.com"
    const subject = `New contact: ${name}`
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`

    // Dev mode: no API key -> simulate success
    if (!process.env.RESEND_API_KEY) {
      console.log("[contact] (dev) would send email →", { to, subject, text })
      return NextResponse.json({ ok: true, dev: true })
    }

    // Real send via Resend
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    const res = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Archaic <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject,
      text,
    })

    if (res.error) {
      console.error("[contact] resend error:", res.error)
      // TEMP: surface the error to help you debug in dev
      return NextResponse.json({ error: "Email failed", detail: res.error }, { status: 500 })
    }

    return NextResponse.json({ ok: true, id: res.data?.id ?? null })
  } catch (err: unknown) {
  console.error("[contact] server error:", err)
  let detail = "Unknown error"
  if (err instanceof Error) {
    detail = err.message
  } else if (typeof err === "string") {
    detail = err
  }
  return NextResponse.json({ error: "Server error", detail }, { status: 500 })
}

}
