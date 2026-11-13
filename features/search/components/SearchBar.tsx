"use client"

import { Search, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        inputRef.current?.blur()
        setIsFocused(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <button
        type="button"
        className={cn(
          "fixed inset-0 z-40 bg-neutral-950/40 backdrop-blur-sm transition-all duration-300",
          isFocused
            ? "opacity-100 pointer-events-auto min-h-screen"
            : "opacity-0 pointer-events-none",
        )}
        onClick={() => {
          inputRef.current?.blur()
          setIsFocused(false)
        }}
      />

      <div className="relative z-50 flex w-full items-center ">
        <div
          className={cn(
            "flex w-full items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 transition-all duration-300",
            "focus-within:border-neutral-950 focus-within:bg-white dark:border-neutral-800 dark:bg-neutral-900",
            "dark:focus-within:border-white dark:focus-within:bg-neutral-950",
            isFocused && "shadow-lg",
          )}
        >
          <Search className="size-4 shrink-0 text-neutral-400" />

          <input
            ref={inputRef}
            type="text"
            placeholder="جستجوی محصولات..."
            className="w-full bg-transparent text-sm text-neutral-950 outline-none placeholder:text-neutral-400 dark:text-white"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          />

          {isFocused && (
            <button
              type="button"
              onClick={() => {
                inputRef.current?.blur()
                setIsFocused(false)
              }}
              className="flex size-6 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-white"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>
      </div>
    </>
  )
}
