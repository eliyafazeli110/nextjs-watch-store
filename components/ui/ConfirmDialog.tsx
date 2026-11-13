"use client"

import { AlertTriangle, Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

import { Dialog } from "./Dialog"

interface ConfirmDialogProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description?: string
  confirmLabel?: string
  cancelLabel?: string
  variant?: "danger" | "default"
  isLoading?: boolean
}

export function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = "تأیید",
  cancelLabel = "انصراف",
  variant = "default",
  isLoading = false,
}: ConfirmDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
      icon={<AlertTriangle className="size-5" />}
      iconVariant={variant === "danger" ? "danger" : "default"}
      persistent={isLoading}
      variant="dialog"
    >
      <div className="flex flex-col gap-2 text-right">
        <h2 className="text-lg font-bold tracking-tight text-neutral-950 dark:text-white">
          {title}
        </h2>

        {description && (
          <p className="text-sm leading-7 text-neutral-500 dark:text-white/50">
            {description}
          </p>
        )}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={onClose}
          disabled={isLoading}
          className="flex h-11 flex-1 items-center justify-center rounded-full border border-neutral-200 bg-transparent text-sm font-medium text-neutral-950 transition-all duration-200 hover:border-neutral-950 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/5"
        >
          {cancelLabel}
        </button>

        <button
          type="button"
          onClick={onConfirm}
          disabled={isLoading}
          className={cn(
            "flex h-11 flex-1 items-center justify-center gap-2",
            "rounded-full text-sm font-medium text-white",
            "transition-all duration-200 active:scale-[0.98]",
            "disabled:cursor-not-allowed disabled:opacity-60",
            variant === "danger"
              ? "bg-red-500 hover:bg-red-600"
              : "bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200",
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              در حال خروج...
            </>
          ) : (
            confirmLabel
          )}
        </button>
      </div>
    </Dialog>
  )
}
