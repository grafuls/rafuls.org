"use client"

import { useEffect, useState } from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const options = [
  { value: "system", icon: Monitor, label: "System theme" },
  { value: "light", icon: Sun, label: "Light theme" },
  { value: "dark", icon: Moon, label: "Dark theme" },
] as const

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />
  }

  // show the icon of the theme that is currently in effect
  const effective = options.find((o) => o.value === resolvedTheme) ?? options[0]
  const Icon = effective.icon

  const cycle = () => {
    const next = (index + 1) % options.length
    setIndex(next)
    setTheme(options[next].value)
  }

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${effective.label}. Click to change.`}
      className="press grid h-9 w-9 place-items-center rounded-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
    >
      <Icon className="h-4 w-4" />
    </button>
  )
}
