import Image from "next/image"
import Link from "next/link"

import type { OrderItemDetail } from "../types/order-type"

interface OrderItemsListProps {
  items: OrderItemDetail[]
  subtotal: number
}

export function OrderItemsList({ items, subtotal }: OrderItemsListProps) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-base font-semibold text-neutral-950 dark:text-white">
          محصولات سفارش
        </h2>
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-[10px] font-medium text-neutral-600 dark:bg-neutral-900 dark:text-white/60">
          {items.length.toLocaleString("fa-IR")} محصول
        </span>
      </div>

      <div className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-900">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 py-4 first:pt-0 last:pb-0">
            <Link
              href={`/product/${item.slug}`}
              className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900"
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="80px"
                />
              )}
            </Link>

            <div className="flex flex-1 flex-col justify-between py-0.5">
              <Link
                href={`/product/${item.slug}`}
                className="line-clamp-2 text-sm font-medium text-neutral-950 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
              >
                {item.name}
              </Link>

              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-neutral-500 dark:text-white/40">
                  {item.quantity.toLocaleString("fa-IR")} عدد ×{" "}
                  {item.price.toLocaleString("fa-IR")} تومان
                </span>

                <span className="text-sm font-semibold text-neutral-950 tabular-nums dark:text-white">
                  {(item.price * item.quantity).toLocaleString("fa-IR")}
                  <span className="mr-1 text-xs font-normal text-neutral-500 dark:text-neutral-400">
                    تومان
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 border-t border-neutral-100 pt-4 dark:border-neutral-900">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500 dark:text-white/50">
            جمع محصولات
          </span>
          <span className="font-medium text-neutral-950 tabular-nums dark:text-white">
            {subtotal.toLocaleString("fa-IR")}
            <span className="mr-1 text-xs font-normal text-neutral-500 dark:text-neutral-400">
              تومان
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}
