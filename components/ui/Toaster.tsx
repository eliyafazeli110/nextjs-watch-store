"use client"

import { Toast } from "@base-ui/react/toast"
import { Check, CircleAlert, X } from "lucide-react"

export function Toaster() {
  const { toasts } = Toast.useToastManager()

  return (
    <Toast.Portal>
      <Toast.Viewport className="fixed top-4 left-1/2 z-100 flex w-full max-w-sm -translate-x-1/2 flex-col gap-2 outline-none">
        {toasts.map((toast) => (
          <Toast.Root
            key={toast.id}
            toast={toast}
            className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-lg transition-all duration-300 data-[ending-style]:translate-x-full data-[ending-style]:opacity-0 data-[starting-style]:translate-y-2 data-[starting-style]:opacity-0 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <Toast.Content className="flex items-start gap-3">
              <div
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full data-[type=error]:bg-red-100 data-[type=error]:text-red-600 data-[type=success]:bg-emerald-100 data-[type=success]:text-emerald-600 dark:data-[type=error]:bg-red-950 dark:data-[type=error]:text-red-400 dark:data-[type=success]:bg-emerald-950 dark:data-[type=success]:text-emerald-400"
                data-type={toast.type}
              >
                {toast.type === "success" && <Check className="size-3" />}
                {toast.type === "error" && <CircleAlert className="size-3" />}
              </div>

              <div className="flex-1">
                <Toast.Title className="text-sm font-medium text-neutral-950 dark:text-white" />
                <Toast.Description className="mt-1 text-xs text-neutral-500 dark:text-neutral-400" />
              </div>

              <Toast.Close
                aria-label="بستن"
                className="shrink-0 rounded-full p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-white"
              >
                <X className="size-3.5" />
              </Toast.Close>
            </Toast.Content>
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </Toast.Portal>
  )
}
