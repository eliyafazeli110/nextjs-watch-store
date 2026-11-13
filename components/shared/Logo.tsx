import Link from "next/link"

import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="واچلند"
      className={cn(
        "group flex items-center gap-2 transition-opacity hover:opacity-80",
        className,
      )}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <circle
          cx="14"
          cy="14"
          r="13"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="14"
          cy="14"
          r="9"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.4"
        />

        <line
          x1="14"
          y1="5"
          x2="14"
          y2="7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <line
          x1="14"
          y1="21"
          x2="14"
          y2="23"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <line
          x1="21"
          y1="14"
          x2="23"
          y2="14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <line
          x1="5"
          y1="14"
          x2="7"
          y2="14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <line
          x1="14"
          y1="14"
          x2="14"
          y2="9"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />

        <line
          x1="14"
          y1="14"
          x2="18"
          y2="16"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        <circle cx="14" cy="14" r="1.25" fill="currentColor" />
      </svg>

      <span className="flex flex-col items-start leading-none">
        <span className="text-base font-bold tracking-tight text-neutral-950 dark:text-white">
          واچلند
        </span>
      </span>
    </Link>
  )
}
