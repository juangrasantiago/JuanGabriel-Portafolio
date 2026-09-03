"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"

export function TypedTerminal({ lines }: { lines: string[] }) {
  const reduce = useReducedMotion()
  const [lineIndex, setLineIndex] = useState(0)
  const [text, setText] = useState("")
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing")

  useEffect(() => {
    if (reduce) {
      setText(lines[0] ?? "")
      return
    }

    const current = lines[lineIndex % lines.length]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 32)
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1400)
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 900)
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 16)
      } else {
        timeout = setTimeout(() => {
          setLineIndex((i) => (i + 1) % lines.length)
          setPhase("typing")
        }, 200)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, lineIndex, lines, reduce])

  return (
    <span className="font-mono">
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  )
}
