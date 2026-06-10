"use client"

import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/lib/i18n"

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index={t.skills.index} title={t.skills.title} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.skills.groups.map((group, gi) => {
            const accentColor = gi % 2 === 0 ? "text-primary" : "text-accent"
            const chipHover =
              gi % 2 === 0
                ? "hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                : "hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
            return (
              <div
                key={group.category}
                className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <h3 className={`font-mono text-xs uppercase tracking-widest ${accentColor}`}>
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors ${chipHover}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
