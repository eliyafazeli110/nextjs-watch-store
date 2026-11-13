"use client"

import type { ReactNode } from "react"

import { Dialog as BaseDialog } from "@base-ui/react/dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

interface DialogProps {
  open: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
  icon?: ReactNode
  iconVariant?: "danger" | "default" | "primary"
  showClose?: boolean
  persistent?: boolean
  variant?: "dialog" | "overlay"
  className?: string
}

const iconVariantMap = {
  danger: "bg-red-100 text-red-600 dark:bg-red-950/50 dark:text-red-400",
  primary: "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950",
  default:
    "bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400",
}

export function Dialog({
  open,
  onOpenChange,
  children,
  icon,
  iconVariant = "default",
  showClose = true,
  persistent = false,
  variant = "dialog",
  className,
}: DialogProps) {
  return (
    <BaseDialog.Root
      open={open}
      onOpenChange={onOpenChange}
      disablePointerDismissal={persistent}
    >
      <BaseDialog.Portal>
        <BaseDialog.Backdrop
          className={cn(
            "fixed inset-0 z-100 transition-opacity duration-300",
            variant === "dialog"
              ? "bg-black/70"
              : "bg-white/95 dark:bg-neutral-950/95",
            "data-starting-style:opacity-0 data-ending-style:opacity-0",
          )}
        />

        <BaseDialog.Popup
          className={cn(
            "fixed left-1/2 top-1/2 z-100 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 outline-none",
            variant === "dialog"
              ? "w-[calc(100%-2rem)] max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl shadow-neutral-900/20 dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-black/50"
              : "flex w-[calc(100%-2rem)] max-w-md flex-col items-center gap-6",
            "data-starting-style:scale-95 data-starting-style:opacity-0",
            "data-ending-style:scale-95 data-ending-style:opacity-0",
            className,
          )}
        >
          {variant === "dialog" ? (
            <>
              {(Boolean(icon) || showClose) && (
                <div className="flex items-start justify-between gap-4">
                  {icon ? (
                    <div
                      className={cn(
                        "flex size-12 shrink-0 items-center justify-center rounded-full",
                        iconVariantMap[iconVariant],
                      )}
                    >
                      {icon}
                    </div>
                  ) : (
                    <span />
                  )}

                  {showClose && (
                    <BaseDialog.Close
                      disabled={persistent}
                      aria-label="بستن"
                      className="flex size-7 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white/40 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                      <X className="size-4" />
                    </BaseDialog.Close>
                  )}
                </div>
              )}

              <div className="mt-4">{children}</div>
            </>
          ) : (
            children
          )}
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  )
}
