"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const EASE = [0.16, 1, 0.3, 1] as const

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  as = "div",
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: "div" | "span"
}) {
  const reduce = useReducedMotion()
  const Comp = motion[as]

  return (
    <Comp
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Comp>
  )
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  const reduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: {
      transition: reduce ? undefined : { staggerChildren: stagger },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  y = 16,
}: {
  children: ReactNode
  className?: string
  y?: number
}) {
  const reduce = useReducedMotion()

  const item: Variants = {
    hidden: reduce ? {} : { opacity: 0, y },
    show: reduce ? {} : { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}

export function HoverLift({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
