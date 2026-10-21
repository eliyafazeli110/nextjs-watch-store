import { Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProductCard({ product }: any) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700 dark:hover:shadow-neutral-900/50">
      <Link href={"/"} className="relative block" aria-label={product.name}>
        <div className="relative isolate aspect-4/5 transform-gpu overflow-hidden rounded-t-2xl bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />

          <button
            type="button"
            aria-label="افزودن به علاقه‌مندی‌ها"
            className="absolute top-3 left-3 z-10 flex size-9 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-200 hover:scale-110 dark:bg-neutral-900/80"
          >
            <Heart className="size-4 text-neutral-700 dark:text-neutral-300" />
          </button>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="line-clamp-2 text-sm font-medium text-neutral-950 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300">
          {product.name}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-3">
          {product.inStock ? (
            <span className="text-sm font-semibold text-neutral-950 dark:text-white">
              {product.price.toLocaleString("fa-IR")}
              <span className="mr-1 text-xs font-normal text-neutral-500">
                تومان
              </span>
            </span>
          ) : (
            <span className="text-xs font-medium text-red-500 dark:text-red-400">
              ناموجود
            </span>
          )}

          <button
            type="button"
            aria-label="افزودن به سبد خرید"
            disabled={!product.inStock}
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition-all duration-200 hover:scale-110 hover:bg-neutral-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            <ShoppingCart className="size-4" />
          </button>
        </div>
      </div>
    </article>
  )
}
