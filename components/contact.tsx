"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Check, Mail } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { useLanguage } from "@/lib/i18n"

export function Contact() {
  const { t } = useLanguage()

  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText("juangrasantiago@gmail.com")

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading index={t.contact.index} title={t.contact.title} className="justify-center" />
        <Reveal>
          <p className="mx-auto max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {t.contact.desc}
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <a
              href="mailto:juangrasantiago@gmail.com"
              className="flex flex-col items-center justify-center"
            >
              <Mail className="size-4" aria-hidden="true" />
              {t.contact.cta}
            </a>
          </Button>
        </Reveal>
        <button
          type="button"
          onClick={copyEmail}
          className="mt-4 inline-flex cursor-pointer items-center justify-center gap-1.5 text-center font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="copied"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-1.5 text-primary"
              >
                <Check className="size-4" aria-hidden="true" />
                Correo copiado al portapapeles
              </motion.span>
            ) : (
              <motion.span
                key="email"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
              >
                juangrasantiago@gmail.com
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        <div className="mt-6 flex items-center justify-center gap-6">
          <a
            href="https://github.com/juangrasantiago"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="size-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-gabriel-santiago-51184421b/?trk=opento_sprofile_details"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <LinkedinIcon className="size-6" />
          </a>
          <a
            href="mailto:juangrasantiago@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-muted-foreground">{t.footer.built}</p>
        <p className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} — {t.footer.designed}
        </p>
      </div>
    </footer>
  )
}
