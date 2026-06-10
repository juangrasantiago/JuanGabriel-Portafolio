"use client"

import Image from "next/image"
import { ArrowRight, Mail, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { useLanguage } from "@/lib/i18n"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border px-6 pb-20 pt-32 sm:pt-40"
    >
      {/* grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/4 size-[520px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--primary), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 right-1/4 size-[480px] translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <Terminal className="size-3.5" aria-hidden="true" />
            {t.hero.badge}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Juan Gabriel{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Santiago
            </span>
          </h1>
          <p className="mt-4 inline-block rounded-md bg-gradient-to-r from-primary/15 to-accent/15 px-3 py-1.5 font-mono text-base font-medium text-primary sm:text-lg">
            {t.hero.role}
          </p>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            {t.hero.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button asChild>
              <a
                href="#projects"
                className="inline-flex items-center gap-2"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">{t.hero.getInTouch}</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
            <a
              href="https://github.com/juangrasantiago"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-gabriel-santiago-51184421b/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              <LinkedinIcon className="size-5" />
            </a>
            <a
              href="mailto:juangrasantiago@gmail.com"
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative shrink-0">
          <div
            className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary to-accent opacity-50 blur-xl"
            aria-hidden="true"
          />
          <div className="relative size-44 overflow-hidden rounded-full border-2 border-primary/50 sm:size-56">
            <Image
              src="/profile.png"
              alt="Portrait of Juan Gabriel Santiago"
              fill
              priority
              sizes="(max-width: 640px) 11rem, 14rem"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
