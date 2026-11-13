"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"

import {
  buildFilterQuery,
  hasActiveFilters,
  parseFilters,
  toggleInList,
} from "./queries/filter-query"

export function useProductFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const [filters, setFilters] = useState(() =>
    parseFilters(new URLSearchParams(searchParams.toString())),
  )

  const toggleBrand = (slug: string) =>
    setFilters((prev) => ({ ...prev, brands: toggleInList(prev.brands, slug) }))

  const toggleCategory = (slug: string) =>
    setFilters((prev) => ({
      ...prev,
      category: prev.category === slug ? "" : slug,
    }))

  const navigate = (query: string) =>
    startTransition(() => {
      router.push(query ? `${pathname}?${query}` : pathname, { scroll: false })
    })

  const apply = () => navigate(buildFilterQuery(filters))

  const clear = () => {
    setFilters({ brands: [], category: "" })
    navigate("")
  }

  return {
    filters,
    hasFilters: hasActiveFilters(filters),
    isPending,
    toggleBrand,
    toggleCategory,
    apply,
    clear,
  }
}
