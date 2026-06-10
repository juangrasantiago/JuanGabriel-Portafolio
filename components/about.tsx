"use client"

import { SectionHeading } from "@/components/section-heading"
import { ShieldCheck, Cloud, Bug } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const icons = [ShieldCheck, Cloud, Bug]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index={t.about.index} title={t.about.title} />
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>{t.about.p1}</p>
              <p>
                {t.about.p2a}{" "}
                <span className="font-medium text-primary">AZ-900</span>{" "}
                {t.about.p2b}{" "}
                <span className="font-medium text-accent">SC-900</span>
                {t.about.p2c}
              </p>
              <p>{t.about.p3}</p>
            </div>
          </div>
          <div className="space-y-4 md:col-span-2">
            {t.about.highlights.map((item, i) => {
              const Icon = icons[i]
              const tint =
                i % 2 === 0
                  ? "bg-primary/10 text-primary"
                  : "bg-accent/10 text-accent"
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <span className={`rounded-md p-2 ${tint}`}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
