"use client"

import type { LucideIcon } from "lucide-react"
import type { ComponentPropsWithRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

interface AuthInputProps extends ComponentPropsWithRef<"input"> {
  label?: string
  icon?: LucideIcon
  error?: string
  leftSlot?: ReactNode
}

export const AuthInput = ({
  label,
  icon: Icon,
  error,
  className,
  id,
  ref,
  leftSlot,
  ...props
}: AuthInputProps) => {
  const inputId = id ?? props.name

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={inputId}
        className="text-xs font-medium text-neutral-700 dark:text-white/70"
      >
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-neutral-400 dark:text-white/40" />
        )}

        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-11 w-full rounded-xl border bg-white px-4 text-sm",
            "text-neutral-950 placeholder:text-neutral-400",
            "transition-all duration-200 outline-none",
            "focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10",
            "dark:bg-neutral-950 dark:text-white dark:placeholder:text-white/30",
            "dark:focus:border-white dark:focus:ring-white/10",
            Icon && "pr-10",
            leftSlot && "pl-10",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
              : "border-neutral-200 dark:border-neutral-800",
            className,
          )}
          {...props}
        />
        {Boolean(leftSlot) && (
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            {leftSlot}
          </div>
        )}
      </div>

      {error && (
        <p className="text-xs text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  )
}

AuthInput.displayName = "AuthInput"
