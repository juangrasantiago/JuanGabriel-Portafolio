"use client"

import type { ComponentType } from "react"
import { SectionHeading } from "@/components/section-heading"
import { StaggerGroup, StaggerItem, HoverLift } from "@/components/motion"
import { Database, ExternalLink, FolderOpen, ShieldCheck } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { GlowCardBorder } from "@/components/glow-card"
import { useLanguage } from "@/lib/i18n"

type Project = {
  title: string
  desc: string
  tags: readonly string[]
  github?: string
  demo?: string
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <StaggerItem>
      <HoverLift className="h-full">
        <article
          data-slot="glow-card"
          className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
        >
          <div className="flex items-start justify-between gap-4">
            <h4 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h4>
            <div className="flex shrink-0 items-center gap-3 text-muted-foreground">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} source`}
                  className="transition-colors hover:text-primary"
                >
                  <GithubIcon className="size-5" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
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
  )
}

function ProjectGroup({
  id,
  label,
  icon: Icon,
  items,
}: {
  id: string
  label: string
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>
  items: readonly Project[]
}) {
  if (items.length === 0) return null

  return (
    <div id={id} className="scroll-mt-24">
      <h3 className="mb-5 flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary">
        <Icon className="size-4" aria-hidden={true} />
        {label}
        <span className="text-muted-foreground">({items.length})</span>
      </h3>
      <StaggerGroup className="grid gap-6 md:grid-cols-2">
        {items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </StaggerGroup>
    </div>
  )
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index={t.projects.index} title={t.projects.title} />
        <div className="flex flex-col gap-14">
          <ProjectGroup
            id="projects-security"
            label={t.projects.securityLabel}
            icon={ShieldCheck}
            items={t.projects.items}
          />
          <ProjectGroup
            id="projects-sap"
            label={t.projects.sapLabel}
            icon={Database}
            items={t.projects.sapItems}
          />
          <ProjectGroup
            id="projects-other"
            label={t.projects.otherLabel}
            icon={FolderOpen}
            items={t.projects.otherItems}
          />
        </div>
      </div>
    </section>
  )
}
