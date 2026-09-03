"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { StaggerGroup, StaggerItem, HoverLift } from "@/components/motion"
import { useLanguage } from "@/lib/i18n"

/**
 * Proficiency is only set for skills with real evidence in the author's own
 * repos (language use, depth, test coverage, commit history) — everything
 * else keeps the plain chip so nothing is overstated.
 */
const proficiency: Record<string, number> = {
  Python: 80,
  HTML: 65,
  CSS: 60,
  JavaScript: 55,
  GitHub: 65,
}

function SkillBar({ label, value, accent }: { label: string; value: number; accent: "primary" | "accent" }) {
  const reduce = useReducedMotion()
  const barColor = accent === "primary" ? "bg-primary" : "bg-accent"
  const textColor = accent === "primary" ? "text-primary" : "text-accent"

  return (
    <li>
      <div className="flex items-baseline justify-between">
        <span className="text-sm text-secondary-foreground">{label}</span>
        <span className={`font-mono text-xs ${textColor}`}>{value}%</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={reduce ? undefined : { width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </li>
  )
}

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index={t.skills.index} title={t.skills.title} />
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {t.skills.groups.map((group, gi) => {
            const accent = gi % 2 === 0 ? "primary" : "accent"
            const accentColor = accent === "primary" ? "text-primary" : "text-accent"
            const chipHover =
              accent === "primary"
                ? "hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                : "hover:border-accent/60 hover:bg-accent/10 hover:text-accent"

            const rated = group.items.filter((item) => item in proficiency)
            const unrated = group.items.filter((item) => !(item in proficiency))

            return (
              <StaggerItem key={group.category}>
                <HoverLift>
                  <div className="h-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30 hover:glow-border">
                    <h3 className={`font-mono text-xs uppercase tracking-widest ${accentColor}`}>
                      {group.category}
                    </h3>

                    {rated.length > 0 && (
                      <ul className="mt-4 space-y-3">
                        {rated.map((item) => (
                          <SkillBar key={item} label={item} value={proficiency[item]} accent={accent} />
                        ))}
                      </ul>
                    )}

                    {unrated.length > 0 && (
                      <ul className={`flex flex-wrap gap-2 ${rated.length > 0 ? "mt-3" : "mt-4"}`}>
                        {unrated.map((item, ii) => (
                          <li
                            key={item}
                            className={`rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-all hover:scale-105 ${chipHover}`}
                            style={{ transitionDelay: `${ii * 20}ms` }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </HoverLift>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
