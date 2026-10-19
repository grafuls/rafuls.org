"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
]

export default function NavLinks() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        // prefer the deepest currently-visible tracked section; none = no highlight
        const found = sections.find((s) => visible.has(s.id))
        setActive(found ? found.id : null)
      },
      { rootMargin: "-30% 0px -45% 0px" }
    )
    for (const { id } of sections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-current={active === id ? "true" : undefined}
          className={cn(
            "rounded-sm px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
            active === id && "text-foreground"
          )}
        >
          {label}
          <span
            aria-hidden="true"
            className={cn(
              "mt-0.5 block h-px bg-primary transition-transform duration-300",
              active === id ? "scale-x-100" : "scale-x-0"
            )}
          />
        </a>
      ))}
    </nav>
  )
}
