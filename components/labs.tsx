"use client"

import { SectionHeading } from "@/components/section-heading"
import { Crosshair, Network, Lock, ScanLine } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const icons = [Crosshair, Network, ScanLine, Lock]

export function Labs() {
  const { t } = useLanguage()

  return (
    <section id="labs" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index={t.labs.index} title={t.labs.title} />
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {t.labs.items.map((lab, i) => {
            const Icon = icons[i]
            const tint =
              i % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
            return (
              <article
                key={lab.name}
                className="flex flex-col gap-3 bg-card p-6 transition-colors hover:bg-secondary"
              >
                <div className="flex items-center justify-between">
                  <span className={`rounded-md p-2 ${tint}`}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 font-mono text-[0.7rem] uppercase tracking-widest text-primary">
                    {lab.level}
                  </span>
                </div>
                <h3 className="font-medium text-foreground">{lab.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{lab.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
