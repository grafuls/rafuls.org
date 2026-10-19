import type React from "react"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata, Viewport } from "next"
import Link from "next/link"
import NavLinks from "@/components/nav-links"
import ThemeToggle from "@/components/theme-toggle"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" })
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rafuls.org"),
  title: {
    default: "Gonzalo Rafuls — Principal Software Engineer",
    template: "%s — Gonzalo Rafuls",
  },
  description:
    "Gonzalo Rafuls builds infrastructure you can trust: bare-metal automation at Red Hat, open-source tools used by performance teams worldwide, and resilient cloud-native systems.",
  keywords: [
    "Gonzalo Rafuls",
    "principal software engineer",
    "Brno",
    "infrastructure automation",
    "Redfish",
    "bare metal",
    "Red Hat",
    "open source",
  ],
  authors: [{ name: "Gonzalo Rafuls", url: "https://rafuls.org" }],
  openGraph: {
    title: "Gonzalo Rafuls — Principal Software Engineer",
    description:
      "Infrastructure automation and developer tooling. Open source from Red Hat performance teams.",
    url: "https://rafuls.org",
    siteName: "rafuls.org",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Rafuls — Principal Software Engineer",
    description:
      "Infrastructure automation and developer tooling.",
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#faf9f6",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#131210" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} ${instrument.variable} font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <div className="grain" aria-hidden="true" />
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="group flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="grid h-7 w-7 place-items-center rounded-sm bg-foreground font-mono text-xs font-semibold text-background transition-transform duration-200 group-hover:-rotate-3"
                  >
                    gr
                  </span>
                  <span className="font-display text-lg">Gonzalo Rafuls</span>
                </Link>
                <NavLinks />
                <div className="flex items-center gap-1.5">
                  <ThemeToggle />
                  <Link
                    href="#contact"
                    className="press hidden rounded-sm bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:inline-block"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </header>
            <main id="main" className="flex-1">
              {children}
            </main>
            <footer className="border-t">
              <div className="container flex flex-col items-start justify-between gap-6 py-8 md:flex-row md:items-center md:py-10">
                <p className="text-sm text-muted-foreground tabular">
                  © {new Date().getFullYear()} Gonzalo Rafuls · Brno, Czech Republic
                </p>
                <nav
                  aria-label="Footer"
                  className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
                >
                  <Link href="https://github.com/grafuls" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                    GitHub
                  </Link>
                  <Link href="https://linkedin.com/in/grafuls" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                    LinkedIn
                  </Link>
                  <Link href="/privacy-policy" className="text-muted-foreground transition-colors hover:text-foreground">
                    Privacy
                  </Link>
                  <Link href="/terms-of-service" className="text-muted-foreground transition-colors hover:text-foreground">
                    Terms
                  </Link>
                </nav>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
