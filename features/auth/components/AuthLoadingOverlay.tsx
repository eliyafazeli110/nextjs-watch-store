"use client"

import { Dialog } from "@base-ui/react/dialog"
import { Loader2, LogIn } from "lucide-react"

interface AuthLoadingOverlayProps {
  isLoading: boolean
  message?: string
}

export function AuthLoadingOverlay({
  isLoading,
  message = "در حال ورود به حساب...",
}: AuthLoadingOverlayProps) {
  return (
    <Dialog.Root open={isLoading}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-neutral-950/40 backdrop-blur-sm transition-opacity duration-300 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />

        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-xl outline-none transition-all duration-300 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 dark:bg-neutral-950 dark:border dark:border-neutral-800">
          <div className="relative">
            <div className="absolute inset-0 -m-4 animate-pulse rounded-full bg-neutral-950/5 dark:bg-white/5" />
            <div className="absolute inset-0 -m-8 rounded-full border border-neutral-950/10 dark:border-white/10" />

            <div className="relative flex size-16 items-center justify-center rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">
              <LogIn className="size-6" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-sm font-medium text-neutral-950 dark:text-white">
              {message}
            </p>
            <p className="text-xs text-neutral-500 dark:text-white/40">
              لطفاً چند لحظه صبر کنید
            </p>
          </div>

          <div className="h-0.5 w-32 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
            <div className="h-full w-1/2 animate-pulse bg-neutral-950 dark:bg-white" />
          </div>

          <Loader2 className="size-5 animate-spin text-neutral-400 dark:text-white/40" />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
