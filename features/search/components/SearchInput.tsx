"use client"

import { Loader2, Search, X } from "lucide-react"

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  isLoading: boolean
  inputRef: React.RefObject<HTMLInputElement | null>
  onClose?: () => void
}

export function SearchInput({
  value,
  onChange,
  isLoading,
  inputRef,
  onClose,
}: SearchInputProps) {
  return (
    <div className="flex items-center gap-3 border-b border-neutral-100 px-4 py-3 dark:border-neutral-800">
      <Search className="size-5 shrink-0 text-neutral-400" />

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="جستجوی ساعت، برند و..."
        className="w-full bg-transparent text-sm text-neutral-950 outline-none placeholder:text-neutral-400 dark:text-white"
      />

      {isLoading && (
        <Loader2 className="size-4 animate-spin text-neutral-400" />
      )}

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="flex size-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-950 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white"
          aria-label="بستن"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  )
}
