"use client"

import { useEffect, useRef } from "react"

const CHARS = "01アイウエオカキクケコサシスセソ01001101"

export function MatrixRain({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let columns = 0
    let drops: number[] = []
    const fontSize = 16

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      width = canvas!.width = rect.width
      height = canvas!.height = rect.height
      columns = Math.floor(width / fontSize)
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -40))
    }

    resize()
    window.addEventListener("resize", resize)

    let frame = 0
    let raf = 0

    function draw() {
      raf = requestAnimationFrame(draw)
      frame++
      if (frame % 3 !== 0) return // cap effective rate ~20fps

      ctx!.fillStyle = "rgba(5, 10, 8, 0.15)"
      ctx!.fillRect(0, 0, width, height)

      ctx!.font = `${fontSize}px var(--font-jetbrains, monospace)`

      for (let i = 0; i < columns; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx!.fillStyle = "rgba(62, 242, 160, 0.35)"
        ctx!.fillText(char, x, y)

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  )
}
