import { cn } from "@/lib/utils"

export function SectionHeading({
  index,
  title,
  className,
}: {
  index: string
  title: string
  className?: string
}) {
  return (
    <div className={cn("mb-10 flex items-center gap-4", className)}>
      <span className="rounded-md bg-accent/15 px-2 py-1 font-mono text-sm font-semibold text-accent">
        {index}
      </span>
      <h2 className="text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" aria-hidden="true" />
    </div>
  )
}
