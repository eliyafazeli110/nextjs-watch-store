"use client"

import { Dialog } from "@base-ui/react/dialog"
import { SlidersHorizontal, X } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"

import { ProductSidebar } from "./filter/ProductSidebar"

export function MobileFiltersDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className={cn(
          "flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 shadow-sm transition-all duration-200 lg:hidden",
          "hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-md active:scale-[0.98]",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950",
          "dark:border-neutral-800 dark:bg-neutral-950 dark:text-white",
          "dark:hover:border-neutral-700 dark:hover:bg-neutral-900",
          "dark:focus-visible:outline-white",
        )}
      >
        <SlidersHorizontal className="size-4" />
        فیلترها
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop
          className={cn(
            "fixed inset-0 z-50 bg-neutral-950/40 backdrop-blur-sm transition-opacity duration-300",
            "data-starting-style:opacity-0 data-ending-style:opacity-0",
          )}
        />

        <Dialog.Popup
          className={cn(
            "fixed inset-y-0 right-0 z-50 flex w-[85vw] max-w-sm flex-col bg-white shadow-2xl outline-none transition-transform duration-300 ease-in-out",
            "data-starting-style:translate-x-full data-ending-style:translate-x-full",
            "dark:border-l dark:border-neutral-800 dark:bg-neutral-950",
          )}
        >
          <div className="flex items-center justify-between border-b border-neutral-100 p-5 dark:border-neutral-800/50">
            <h2 className="text-lg font-bold text-neutral-950 dark:text-white">
              فیلترها
            </h2>
            <Dialog.Close
              className={cn(
                "flex size-8 items-center justify-center rounded-full text-neutral-500 transition-colors",
                "hover:bg-neutral-100 hover:text-neutral-950",
                "dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white",
              )}
            >
              <X className="size-4" />
              <span className="sr-only">بستن</span>
            </Dialog.Close>
          </div>

          <div className="flex-1 overflow-y-auto p-5">
            <ProductSidebar />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
