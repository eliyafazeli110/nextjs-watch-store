"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import type { SearchProduct } from "../search-type"

import EmptyState from "./SearchEmptyState"
import { SearchResultItem } from "./SearchResultItem"

interface SearchResultsProps {
  results: SearchProduct[]
  query: string
  onSelect: () => void
}

export function SearchResults({
  results,
  query,
  onSelect,
}: SearchResultsProps) {
  if (results.length === 0) {
    return <EmptyState query={query} />
  }

  return (
    <div className="flex flex-col gap-0.5 p-2">
      {results.map((product) => (
        <SearchResultItem
          key={product.id}
          product={product}
          onSelect={onSelect}
        />
      ))}

      <Link
        href={`/products?q=${encodeURIComponent(query)}`}
        onClick={onSelect}
        className="mt-1 flex items-center justify-center gap-1 rounded-lg py-2 text-[11px] font-medium text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-neutral-950 dark:text-white/40 dark:hover:bg-white/5 dark:hover:text-white"
      >
        مشاهده همه نتایج
        <ArrowLeft className="size-3" />
      </Link>
    </div>
  )
}
