import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ScrollLink from "@/components/scroll-link"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gonzalo Rafuls | Software Engineer",
  description:
    "Professional portfolio of Gonzalo Rafuls, a Senior Software Engineer specializing in cloud-native solutions and infrastructure automation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <Mountain className="h-6 w-6" />
                  <span className="font-bold">Gonzalo Rafuls</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                  <ScrollLink href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                    About
                  </ScrollLink>
                  <ScrollLink href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
                    Skills
                  </ScrollLink>
                  <ScrollLink href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
                    Projects
                  </ScrollLink>
                </nav>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <ScrollLink href="#contact" className="inline-flex items-center justify-center">
                      Contact Me
                    </ScrollLink>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © {new Date().getFullYear()} Gonzalo Rafuls. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://github.com/grafuls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    GitHub
                  </Link>
                  <Link
                    href="https://linkedin.com/in/grafuls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'