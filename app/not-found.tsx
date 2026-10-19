import Link from "next/link"

export default function NotFound() {
  return (
    <main className="container grid min-h-[70dvh] place-items-center py-24">
      <div className="max-w-md text-center">
        <p className="font-mono text-sm text-muted-foreground">
          $ curl https://rafuls.org{"/"}<span className="text-primary">missing</span>
        </p>
        <h1 className="font-display mt-4 text-6xl">404</h1>
        <p className="mt-4 text-muted-foreground">
          No route here. The host is fine — the path doesn&apos;t exist.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="press rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Back home
          </Link>
          <Link
            href="/#contact"
            className="press rounded-sm border px-5 py-3 text-sm font-medium hover:bg-secondary"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  )
}
