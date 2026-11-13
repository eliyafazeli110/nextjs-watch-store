"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

import { useSearch } from "../useProductSearch"
import { SearchInput } from "./SearchInput"
import { SearchResults } from "./SearchResults"

interface SearchPopoverProps {
  open: boolean
  onClose: () => void
}

export function SearchPopover({ open, onClose }: SearchPopoverProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const { query, setQuery, results, isPending, hasResults, showEmpty } =
    useSearch(open)

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 100)
      return () => clearTimeout(timer)
    }
  }, [open])

  return (
    <div
      role="dialog"
      aria-label="جستجو"
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-900/10 transition-all duration-200 dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-black/40",
        open
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none -translate-y-2 scale-95 opacity-0",
      )}
    >
      <SearchInput
        value={query}
        onChange={setQuery}
        isLoading={isPending}
        inputRef={inputRef}
        onClose={onClose}
      />

      {hasResults && (
        <SearchResults results={results} query={query} onSelect={onClose} />
      )}

      {showEmpty && (
        <SearchResults results={[]} query={query} onSelect={onClose} />
      )}

      {query.trim().length < 2 && (
        <div className="flex items-center justify-center px-4 py-6 text-center">
          <p className="text-xs text-neutral-400 dark:text-white/30">
            حداقل ۲ کاراکتر برای جستجو وارد کنید
          </p>
        </div>
      )}
    </div>
  )
}
