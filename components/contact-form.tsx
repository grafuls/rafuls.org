"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight } from "lucide-react"

type Errors = Partial<Record<"name" | "email" | "message", string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function validate(data: FormData): Errors {
    const errors: Errors = {}
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    if (name.length < 2) errors.name = "Enter your name."
    if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address."
    if (message.length < 10) errors.message = "A little more detail helps — at least 10 characters."
    return errors
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nextErrors = validate(data)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    const subject = encodeURIComponent(`rafuls.org — message from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`)
    window.location.href = `mailto:grafuls@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const fieldClass =
    "w-full rounded-sm border border-input bg-card px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 hover:border-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="space-y-1.5">
        <label htmlFor="name" className="mono-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-sm text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="mono-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="mono-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass} min-h-[120px] resize-y`}
          placeholder="What are you working on?"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="press inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
      >
        Send message
        <ArrowUpRight className="h-4 w-4" />
      </button>

      <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
        {sent
          ? "Your mail client should be opening. If not, write directly to grafuls@gmail.com."
          : "This opens your mail client with the message pre-filled. Or email grafuls@gmail.com directly."}
      </p>
    </form>
  )
}
