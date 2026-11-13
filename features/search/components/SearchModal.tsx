"use client"

import { Dialog } from "@base-ui/react/dialog"
import { Search } from "lucide-react"
import { useState } from "react"

import { SearchPopover } from "./SearchPopover"

export function SearchModal({ buttonClassName }: { buttonClassName: string }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={buttonClassName} aria-label="جستجو">
        <Search className="size-4.5" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-neutral-950/40 backdrop-blur-sm transition-opacity duration-300 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />

        <Dialog.Popup className="fixed left-1/2 top-24 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 outline-none">
          <Dialog.Title className="sr-only">جستجوی محصولات</Dialog.Title>
          <SearchPopover open={open} onClose={() => setOpen(false)} />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
