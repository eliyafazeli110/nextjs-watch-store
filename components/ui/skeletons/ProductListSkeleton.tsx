import { ProductCardSkeleton } from "./ProductCardSkeleton"

export function ProductListSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>

      <div className="mt-12 flex justify-center gap-1 animate-pulse">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="size-9 rounded-md bg-neutral-200 dark:bg-neutral-800"
          />
        ))}
      </div>
    </div>
  )
}
