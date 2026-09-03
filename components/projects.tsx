"use client"

import { SectionHeading } from "@/components/section-heading"
import { StaggerGroup, StaggerItem, HoverLift } from "@/components/motion"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { GlowCardBorder } from "@/components/glow-card"
import { useLanguage } from "@/lib/i18n"

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index={t.projects.index} title={t.projects.title} />
        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {t.projects.items.map((project) => (
            <StaggerItem key={project.title}>
              <HoverLift>
                <article
                  data-slot="glow-card"
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <div className="flex shrink-0 items-center gap-3 text-muted-foreground">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source`}
                        className="transition-colors hover:text-primary"
                      >
                        <GithubIcon className="size-5" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo as string}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} live`}
                          className="transition-colors hover:text-accent"
                        >
                          <ExternalLink className="size-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.desc}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <GlowCardBorder />
                </article>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
