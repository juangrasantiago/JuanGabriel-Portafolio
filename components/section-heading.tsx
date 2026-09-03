"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export function SectionHeading({
  index,
  title,
  className,
}: {
  index: string
  title: string
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <div className={cn("mb-10 flex items-center gap-4", className)}>
      <motion.span
        initial={reduce ? undefined : { opacity: 0, x: -12 }}
        whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="font-mono rounded-md border border-primary/30 bg-primary/10 px-2 py-1 text-sm font-semibold text-primary caret"
      >
        {index}
      </motion.span>
      <motion.h2
        initial={reduce ? undefined : { opacity: 0, y: 10 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </motion.h2>
      <motion.span
        initial={reduce ? undefined : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ transformOrigin: "left" }}
        className="h-px flex-1 bg-gradient-to-r from-primary/60 via-accent/40 to-transparent"
        aria-hidden="true"
      />
    </div>
  )
}
