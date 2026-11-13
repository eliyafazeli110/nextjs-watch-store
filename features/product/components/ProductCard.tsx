import Image from "next/image"
import Link from "next/link"

import type { Product } from "@/types"

import { CartButton } from "@/features/cart/components/CartButton"

interface ProductCardProps {
  product: Product
  isLoggedIn: boolean
  cartQuantity?: number
}

export function ProductCard({
  product,
  isLoggedIn,
  cartQuantity = 0,
}: ProductCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700 dark:hover:shadow-neutral-900/50">
      <Link
        href={`/product/${product.slug}`}
        className="relative block"
        aria-label={product.name}
      >
        <div className="relative isolate aspect-4/5 transform-gpu overflow-hidden rounded-t-2xl bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="line-clamp-2 text-sm font-medium text-neutral-950 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300">
          {product.name}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-3">
          {product.stock > 0 ? (
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

          <CartButton
            productId={product.id}
            stock={product.stock}
            isLoggedIn={isLoggedIn}
            cartQuantity={cartQuantity}
          />
        </div>
      </div>
    </article>
  )
}
