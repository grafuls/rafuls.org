export default function SkillBadge({ name }: { name: string }) {
  return (
    <li className="rounded-sm border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-foreground">
      {name}
    </li>
  )
}
