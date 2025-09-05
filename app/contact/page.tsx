"use client"

import { useState } from "react"
import Section from "@/components/ui/section"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")
  const [msg, setMsg] = useState<string>("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setMsg("")

    const form = e.currentTarget
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("ok")
      setMsg("Message sent! We’ll get back to you.")
      form.reset()
    } catch (err) {
      setStatus("error")
      setMsg("Something went wrong. Please try again in a moment.")
    }
  }

  return (
    <Section className="py-16">
      <h1 className="text-3xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        Contact
      </h1>
      <p className="text-gray-300 mt-2">Let’s build the Archaic Verse together.</p>

      <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <Input name="name" placeholder="Your name" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <Input type="email" name="email" placeholder="you@example.com" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <Textarea name="message" placeholder="How can we help?" required />
        </div>
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send message"}
        </Button>

        {msg && (
          <p className={`text-sm mt-2 ${status === "ok" ? "text-[var(--emerald)]" : "text-red-400"}`}>{msg}</p>
        )}
      </form>
    </Section>
  )
}
