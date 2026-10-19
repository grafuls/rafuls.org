import Link from "next/link"
import { ArrowUpRight, GitBranch } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectProps {
  project: {
    id: string
    title: string
    description: string
    detail?: string
    tags: string[]
    githubUrl: string
    demoUrl?: string
  }
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectProps) {
  return (
    <article
      className={cn(
        "group press flex h-full flex-col justify-between rounded-md border bg-card p-6 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8",
        featured && "sm:col-span-2 lg:row-span-2"
      )}
    >
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <h3
            className={cn(
              "font-display tracking-tight",
              featured ? "text-3xl" : "text-2xl"
            )}
          >
            {project.title}
          </h3>
          <GitBranch
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
          />
        </div>
        <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.description}
        </p>
        {featured && project.detail && (
          <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted-foreground/85">
            {project.detail}
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <ul
          className="flex flex-wrap gap-x-3 gap-y-1.5"
          aria-label={`${project.title} technologies`}
        >
          {project.tags.map((tag) => (
            <li key={tag} className="font-mono text-xs text-muted-foreground">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Site
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Code
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
