"use client"

import { useEffect } from "react"

/** Tracks the pointer once for every [data-slot="glow-card"] element on the page. */
export function GlowPointerTracker() {
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const cards = document.querySelectorAll<HTMLElement>("[data-slot='glow-card']")
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const x = (event.clientX - centerX) / (rect.width / 2)
        const y = (event.clientY - centerY) / (rect.height / 2)
        card.style.setProperty("--pointer-x", x.toFixed(3))
        card.style.setProperty("--pointer-y", y.toFixed(3))
      })
    }

    document.addEventListener("pointermove", handlePointerMove)
    return () => document.removeEventListener("pointermove", handlePointerMove)
  }, [])

  return null
}

/** Drop inside a `relative overflow-hidden` card with data-slot="glow-card" to add a pointer-reactive glowing border. */
export function GlowCardBorder() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-2 border-transparent [clip-path:inherit]"
      style={{
        backdropFilter: "blur(10px) brightness(2.4) contrast(2.4) saturate(4)",
        WebkitBackdropFilter: "blur(10px) brightness(2.4) contrast(2.4) saturate(4)",
        maskImage: "linear-gradient(#fff 0 100%), linear-gradient(#fff 0 100%)",
        maskOrigin: "border-box, padding-box",
        maskClip: "border-box, padding-box",
        maskComposite: "exclude",
        WebkitMaskComposite: "xor",
      }}
    />
  )
}
