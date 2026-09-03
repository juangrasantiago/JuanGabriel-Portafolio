"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Shield, Languages } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n"

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("top")
  const { t, toggle, lang } = useLanguage()

  const links = [
    { id: "about", label: t.nav.about },
    { id: "certifications", label: t.nav.certifications },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "labs", label: t.nav.labs },
    { id: "contact", label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = ["top", ...links.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          <Shield className="size-5 text-primary" aria-hidden="true" />
          <span>
            jgs<span className="text-accent">.</span>sec
          </span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="relative hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.id} className="relative">
                <a
                  href={`#${link.id}`}
                  className={cn(
                    "relative z-10 block rounded-md px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors",
                    active === link.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {link.label}
                </a>
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-primary/10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.switchLabel}
            className="flex cursor-pointer items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-primary transition-colors hover:bg-primary/20"
          >
            <Languages className="size-4" aria-hidden="true" />
            {lang === "en" ? "EN" : "ES"}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="flex cursor-pointer flex-col gap-1.5 md:hidden"
          >
            <span
              className={cn(
                "h-0.5 w-6 bg-foreground transition-transform",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn("h-0.5 w-6 bg-foreground transition-opacity", open && "opacity-0")}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-foreground transition-transform",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-1 overflow-hidden border-t border-border bg-background/95 px-6 backdrop-blur-md md:hidden"
          >
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-3 font-mono text-sm uppercase tracking-widest transition-colors",
                    active === link.id ? "text-primary" : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
