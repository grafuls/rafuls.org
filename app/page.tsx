import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import Reveal from "@/components/reveal"
import ContactForm from "@/components/contact-form"
import { projects, skills } from "@/lib/data"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function Home() {
  const [featured, ...rest] = projects

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="hero-ambient relative w-full overflow-hidden border-b">
        <div className="container grid min-h-[80dvh] items-center gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <Reveal>
              <p className="mono-label">Software engineer · infra &amp; tooling</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display mt-4 text-5xl text-balance sm:text-6xl lg:text-7xl">
                Gonzalo Rafuls
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
                I build the tools that build your infrastructure. Years of it at
                Red Hat: bare-metal automation, lab scheduling, chaos
                engineering — open source that performance teams run on every
                day.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#contact"
                  className="press inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#projects"
                  className="press inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-sm font-medium hover:bg-secondary"
                >
                  See the work
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex items-center gap-5">
                <Link
                  href="https://github.com/grafuls"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="press text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/grafuls"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="press text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:grafuls@gmail.com"
                  aria-label="Email Gonzalo"
                  className="press text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                </Link>
                <span className="ml-1 font-mono text-xs text-muted-foreground">
                  github.com/grafuls
                </span>
              </div>
            </Reveal>
          </div>

          {/* Terminal card — asymmetric counterweight */}
          <Reveal delay={280} className="md:col-span-5">
            <div className="shadow-lift rounded-md border bg-card">
              <div className="flex items-center gap-2 border-b px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" aria-hidden="true" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  ~/infra
                </span>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <code>
                  <span className="text-foreground">$</span> quads --poll racks{"\n"}
                  <span className="text-primary">✓</span> 12 labs · 4,180 systems scheduled{"\n"}
                  <span className="text-foreground">$</span> badfish --type firmware --update-all{"\n"}
                  <span className="text-primary">✓</span> 312 nodes at current baseline{"\n"}
                  <span className="text-foreground">$</span> echo &quot;what&apos;s next?&quot;{"\n"}
                  <span className="text-foreground">&gt;</span> <span className="animate-pulse">▍</span>
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="w-full border-b py-20 md:py-28">
        <div className="container grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="mono-label">01 · About</p>
            <h2 className="font-display mt-3 text-4xl sm:text-5xl">
              Infrastructure you can hand to someone else
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7 md:col-start-6">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I work where hardware meets automation: racking reality, not
                toy clusters. At Red Hat I helped build the open-source tools
                that performance and RHEL teams rely on to schedule labs,
                flash firmware, and keep thousands of systems reproducible.
              </p>
              <p>
                My bias: script it once, document it properly, and make the
                boring path the easy path. Python for the glue, Rust when the
                hot path matters, and enough shell scar tissue to know when not
                to reach for it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="w-full border-b bg-secondary/40 py-20 md:py-28">
        <div className="container">
          <Reveal>
            <p className="mono-label">02 · Skills</p>
            <h2 className="font-display mt-3 max-w-[65ch] text-4xl text-pretty sm:text-5xl">
              What I reach for, in order of trust
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {Object.entries(skills).map(([category, categorySkills], i) => (
              <Reveal key={category} delay={i * 100}>
                <h3 className="font-mono text-sm font-medium text-foreground">
                  {category}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-3 mb-5 block h-px w-12 bg-primary"
                />
                <ul className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="w-full border-b py-20 md:py-28">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="mono-label">03 · Projects</p>
              <h2 className="font-display mt-3 max-w-[65ch] text-4xl text-pretty sm:text-5xl">
                Open source, in production somewhere
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link
                href="https://github.com/grafuls?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-1.5 rounded-sm border px-4 py-2.5 text-sm font-medium hover:bg-secondary"
              >
                All repositories
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={100} className="mt-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard project={featured} featured />
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full py-20 md:py-28">
        <div className="container grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="mono-label">04 · Contact</p>
            <h2 className="font-display mt-3 text-4xl sm:text-5xl">
              Got infrastructure that needs taming?
            </h2>
            <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-muted-foreground">
              Consulting, code review, or a second opinion on your automation
              stack — tell me what&apos;s broken or what you&apos;re building.
              I answer within a couple of days.
            </p>
            <dl className="mt-8 space-y-3 font-mono text-sm">
              <div className="flex gap-3">
                <dt className="w-16 text-muted-foreground">email</dt>
                <dd>
                  <Link
                    href="mailto:grafuls@gmail.com"
                    className="text-foreground underline-offset-4 hover:text-primary hover:underline"
                  >
                    grafuls@gmail.com
                  </Link>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 text-muted-foreground">github</dt>
                <dd>
                  <Link
                    href="https://github.com/grafuls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline-offset-4 hover:text-primary hover:underline"
                  >
                    github.com/grafuls
                  </Link>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 text-muted-foreground">tz</dt>
                <dd className="text-foreground tabular">ART (UTC−3)</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={140} className="md:col-span-6 md:col-start-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
