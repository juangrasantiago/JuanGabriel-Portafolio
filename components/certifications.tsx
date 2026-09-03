"use client"

import { SectionHeading } from "@/components/section-heading"
import { StaggerGroup, StaggerItem, HoverLift } from "@/components/motion"
import { Award, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function Certifications() {
  const { t } = useLanguage()

  return (
    <section id="certifications" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index={t.certifications.index} title={t.certifications.title} />
        <StaggerGroup className="grid gap-6 sm:grid-cols-2">
          {t.certifications.items.map((cert) => (
            <StaggerItem key={cert.code}>
              <HoverLift>
                <article className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/60 hover:glow-border-accent">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                    style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="rounded-md bg-accent/15 p-2.5 text-accent">
                      <Award className="size-6" aria-hidden="true" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">
                      <CheckCircle2 className="size-3.5" aria-hidden="true" />
                      {t.certifications.verified}
                    </span>
                  </div>
                  <h3 className="relative mt-5 font-mono text-lg font-semibold text-primary">
                    {cert.code}
                  </h3>
                  <p className="relative mt-1 font-medium text-foreground">{cert.name}</p>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {cert.desc}
                  </p>
                  <p className="relative mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {cert.issuer}
                  </p>
                  {cert.pdf && (
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="relative mt-4 inline-flex items-center rounded-md border border-primary/30 px-3 py-1.5 text-sm text-primary transition-colors hover:bg-primary/10"
                    >
                      {t.certifications.viewCertificate}
                    </a>
                  )}
                </article>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
