import { ProductCardSkeleton } from "@/components/ui/skeletons/ProductCardSkeleton"

export function ProductSliderSkeleton() {
  return (
    <div className="relative w-full pt-4 pb-2 animate-pulse">
      <div className="mb-4 h-9 w-48 rounded bg-neutral-200 dark:bg-neutral-800" />

      <div className="flex gap-4 overflow-hidden pb-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="w-[80vw] shrink-0 sm:w-[40vw] md:w-[30vw] lg:w-[calc(25%-12px)]"
          >
            <ProductCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  )
}
