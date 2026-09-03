"use client"

import { SectionHeading } from "@/components/section-heading"
import { StaggerGroup, StaggerItem, HoverLift } from "@/components/motion"
import { Crosshair, Network, Lock, ScanLine } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const icons = [Crosshair, Network, ScanLine, Lock]

/** Bento spans (lg only) — item 0 is the featured 2x2 cell, item 3 spans full width. */
const bentoSpan = ["lg:col-span-2 lg:row-span-2", "", "", "lg:col-span-3"]

function slug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function Labs() {
  const { t } = useLanguage()

  return (
    <section id="labs" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index={t.labs.index} title={t.labs.title} />
        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:[grid-auto-flow:dense]">
          {t.labs.items.map((lab, i) => {
            const Icon = icons[i] ?? Crosshair
            const tint = i % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
            const glow = i % 2 === 0 ? "hover:glow-border" : "hover:glow-border-accent"
            return (
              <StaggerItem key={lab.name} className={bentoSpan[i] ?? ""}>
                <HoverLift className="h-full">
                  <article
                    className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50 ${glow}`}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 scanlines opacity-25"
                      aria-hidden="true"
                    />

                    {/* terminal window chrome */}
                    <div className="relative flex items-center gap-1.5 border-b border-border bg-secondary/60 px-4 py-2">
                      <span className="size-2 rounded-full bg-destructive/70" aria-hidden="true" />
                      <span className="size-2 rounded-full bg-primary/60" aria-hidden="true" />
                      <span className="size-2 rounded-full bg-accent/60" aria-hidden="true" />
                      <span className="ml-2 truncate font-mono text-[0.65rem] text-muted-foreground">
                        ~/labs/{slug(lab.name)}
                      </span>
                    </div>

                    <div className="relative flex flex-1 flex-col gap-3 p-6">
                      <div className="flex items-center justify-between">
                        <span className={`rounded-md p-2 ${tint}`}>
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 font-mono text-[0.7rem] uppercase tracking-widest text-primary">
                          {lab.level}
                          <span className="caret" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="text-glow font-medium text-foreground">{lab.name}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{lab.desc}</p>
                    </div>
                  </article>
                </HoverLift>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
