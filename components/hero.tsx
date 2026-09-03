"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Mail, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { MatrixRain } from "@/components/matrix-rain"
import { WebGLFlow } from "@/components/webgl-flow"
import { TypedTerminal } from "@/components/typed-terminal"
import { useLanguage } from "@/lib/i18n"

const EASE = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  const nameWords = ["Juan", "Gabriel"]

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border px-6 pb-20 pt-32 sm:pt-40"
    >
      {/* animated fluid WebGL background */}
      <WebGLFlow className="pointer-events-none absolute inset-0 h-full w-full opacity-35" />

      {/* matrix rain */}
      <MatrixRain className="pointer-events-none absolute inset-0 h-full w-full opacity-30" />

      {/* grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 scanlines opacity-40" aria-hidden="true" />

      {/* fade to background at the bottom so content below stays crisp */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <motion.span
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
          >
            <Terminal className="size-3.5" aria-hidden="true" />
            {t.hero.badge}
          </motion.span>

          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {nameWords.map((word, i) => (
              <motion.span
                key={word}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: EASE }}
                className="inline-block"
              >
                {word}
                {i < nameWords.length - 1 ? " " : ""}
              </motion.span>
            ))}{" "}
            <motion.span
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35, ease: EASE }}
              className="text-glow inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Santiago
            </motion.span>
          </h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-4 inline-block rounded-md bg-gradient-to-r from-primary/15 to-accent/15 px-3 py-1.5 font-mono text-base font-medium text-primary sm:text-lg"
          >
            {t.hero.role}
          </motion.p>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-6 text-pretty leading-relaxed text-muted-foreground"
          >
            {t.hero.bio}
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-6 rounded-lg border border-border bg-card/60 px-4 py-2.5 text-left font-mono text-xs text-muted-foreground sm:text-sm"
          >
            <span className="text-primary">jgs@sec</span>
            <span className="text-muted-foreground">:~$ </span>
            <TypedTerminal
              lines={[
                "whoami",
                "status --check availability",
                "nmap -sV target=opportunities",
              ]}
            />
          </motion.div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <Button asChild>
              <a href="#projects" className="inline-flex items-center gap-2">
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">{t.hero.getInTouch}</a>
            </Button>
          </motion.div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="mt-8 flex items-center justify-center gap-4 md:justify-start"
          >
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
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative shrink-0"
        >
          <div
            className="absolute -inset-3 animate-drift rounded-full bg-gradient-to-tr from-primary to-accent opacity-50 blur-xl"
            aria-hidden="true"
          />
          <div
            className={`absolute -inset-1 rounded-full border border-primary/40 ${reduce ? "" : "animate-spin-slow"}`}
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
        </motion.div>
      </div>
    </section>
  )
}
