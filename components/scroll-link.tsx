"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface ScrollLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

export default function ScrollLink({ href, className, children }: ScrollLinkProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Get the target element
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Scroll to the target element
      targetElement.scrollIntoView({ behavior: "smooth" })

      // Update the URL hash
      window.history.pushState(null, "", href)
    }
  }

  if (!isClient) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }

  return (
    <a className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  )
}
