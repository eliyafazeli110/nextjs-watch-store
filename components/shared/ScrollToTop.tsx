"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(scrollProgress)
      setIsVisible(scrollTop > 300)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    const startPosition = window.scrollY
    const duration = 600
    let startTimestamp: number | null = null

    const step = (timestamp: number) => {
      startTimestamp ??= timestamp
      const elapsed = timestamp - startTimestamp
      const progressRatio = Math.min(elapsed / duration, 1)

      const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

      window.scrollTo(0, startPosition * (1 - easeInOutQuad(progressRatio)))

      if (elapsed < duration) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  const size = 48
  const strokeWidth = 2.5
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - progress)

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="بازگشت به بالای صفحه"
      className={cn(
        "fixed bottom-6 left-6 z-50",
        "flex size-12 items-center justify-center",
        "rounded-full",
        "transition-all duration-300",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <span className="absolute inset-0 rounded-full border border-neutral-200 bg-white/90 shadow-lg shadow-neutral-900/10 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/90 dark:shadow-black/50" />

      <svg
        className="absolute inset-0 -rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-neutral-200 dark:stroke-neutral-800"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="stroke-neutral-950 transition-[stroke-dashoffset] duration-150 dark:stroke-white"
        />
      </svg>

      <ArrowUp className="relative size-4 text-neutral-950 transition-transform duration-300 dark:text-white" />
    </button>
  )
}
