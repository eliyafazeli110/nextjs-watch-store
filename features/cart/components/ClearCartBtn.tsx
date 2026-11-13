"use client"

import { Trash2 } from "lucide-react"

interface ClearCartBtnProps {
  handleClearCart: () => void
}

export function ClearCartBtn({ handleClearCart }: ClearCartBtnProps) {
  return (
    <button
      type="button"
      onClick={handleClearCart}
      className="group flex items-center gap-1.5 rounded-full border border-neutral-200/60 bg-transparent px-3 py-1.5 text-xs font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800/60 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:bg-neutral-900/50 dark:hover:text-neutral-300"
    >
      <Trash2 className="size-3" />
      خالی کردن
    </button>
  )
}
