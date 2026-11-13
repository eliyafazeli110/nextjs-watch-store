"use client"

import Image from "next/image"
import Link from "next/link"

import type { SearchProduct } from "../search-type"

interface SearchResultItemProps {
  product: SearchProduct
  onSelect: () => void
}

export function SearchResultItem({ product, onSelect }: SearchResultItemProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      onClick={onSelect}
      className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-neutral-50 dark:hover:bg-white/5"
    >
      <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900">
        {product.image && (
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            className="object-cover"
            sizes="48px"
          />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-[10px] font-medium text-neutral-400 dark:text-white/30">
          {product.brandName && product.categoryName
            ? `${product.brandName} · ${product.categoryName}`
            : ""}
        </span>

        <h3 className="line-clamp-1 text-xs font-medium text-neutral-950 transition-colors group-hover:text-neutral-600 dark:text-white dark:group-hover:text-neutral-300">
          {product.name}
        </h3>

        <span className="text-[11px] font-semibold text-neutral-950 tabular-nums dark:text-white">
          {product.price.toLocaleString("fa-IR")}
          <span className="mr-1 text-[10px] font-normal text-neutral-400 dark:text-white/40">
            تومان
          </span>
        </span>
      </div>
    </Link>
  )
}
