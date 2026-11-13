"use client"

import { useEffect, useState } from "react"

import type { SearchProduct } from "./search-type"

export function useSearch(open: boolean) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchProduct[]>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (!open) {
      setResults([])
      setIsSearching(false)
      return
    }

    const trimmed = query.trim()

    if (trimmed.length < 2) {
      setResults([])
      setIsSearching(false)
      return
    }

    const controller = new AbortController()

    setResults([])
    setIsSearching(true)

    async function runSearch() {
      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(trimmed)}`,
          {
            signal: controller.signal,
          },
        )

        if (!response.ok) throw new Error("Search request failed")

        const data: SearchProduct[] = await response.json()
        if (!controller.signal.aborted) setResults(data)
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return
        if (!controller.signal.aborted) setResults([])
      } finally {
        if (!controller.signal.aborted) setIsSearching(false)
      }
    }

    const timer = setTimeout(() => {
      void runSearch()
    }, 300)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query, open])

  return {
    query,
    setQuery,
    results,
    isPending: isSearching,
    hasResults: results.length > 0,
    showEmpty: query.trim().length >= 2 && !isSearching && results.length === 0,
  }
}
