import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import type { CartData } from "../queries/get-cart"

interface CartItemCardProps {
  item: CartData["items"][number]
  isPending: boolean
  onDecrease: () => void
  onIncrease: () => void
  onRemove: () => void
}

export default function CartItemCard({
  item,
  isPending,
  onDecrease,
  onIncrease,
  onRemove,
}: CartItemCardProps) {
  return (
    <div className="group flex gap-4 rounded-2xl border border-neutral-200 bg-white p-3 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700">
      <Link
        href={`/product/${item.slug}`}
        className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900"
      >
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="96px"
            loading="eager"
          />
        )}
      </Link>

      <div className="flex flex-1 flex-col justify-between py-1">
        <div className="flex items-start justify-between gap-3">
          <Link
            href={`/product/${item.slug}`}
            className="line-clamp-2 text-sm font-medium text-neutral-950 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
          >
            {item.name}
          </Link>

          <button
            type="button"
            onClick={onRemove}
            aria-label="حذف از سبد خرید"
            className="group flex size-8 shrink-0 items-center justify-center rounded-full text-neutral-400 transition-all duration-200 hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:text-white/40 dark:hover:bg-red-950/30 dark:hover:text-red-400 dark:focus-visible:outline-red-400"
          >
            <Trash2 className="size-4 transition-transform duration-200 group-hover:scale-110" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1 rounded-full border border-neutral-200 p-0.5 dark:border-neutral-800">
            {item.quantity === 1 ? (
              <button
                type="button"
                disabled={isPending}
                aria-label="حذف از سبد خرید"
                className="flex size-7 shrink-0 items-center justify-center rounded-full text-neutral-400 transition-all duration-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-default hover:cursor-pointer disabled:opacity-30 dark:text-white/40 dark:hover:bg-red-950/50 dark:hover:text-red-400"
                onClick={onRemove}
              >
                <Trash2 className="size-3.5" />
              </button>
            ) : (
              <button
                type="button"
                disabled={isPending}
                aria-label="کاهش تعداد"
                className="flex size-7 items-center justify-center rounded-full text-neutral-600 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-950 disabled:cursor-default hover:cursor-pointer disabled:opacity-30 disabled:hover:bg-transparent dark:text-white/70 dark:hover:bg-neutral-800 dark:hover:text-white"
                onClick={onDecrease}
              >
                <Minus className="size-3" />
              </button>
            )}

            <span className="w-6 text-center text-xs font-medium text-neutral-950 tabular-nums dark:text-white">
              {item.quantity.toLocaleString("fa-IR")}
            </span>

            <button
              type="button"
              disabled={isPending || item.quantity >= item.stock}
              aria-label="افزایش تعداد"
              className="flex size-7 items-center justify-center rounded-full text-neutral-600 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-950 disabled:cursor-default hover:cursor-pointer disabled:opacity-30 disabled:hover:bg-transparent dark:text-white/70 dark:hover:bg-neutral-800 dark:hover:text-white"
              onClick={onIncrease}
            >
              <Plus className="size-3" />
            </button>
          </div>

          <div className="flex flex-col items-end gap-0.5">
            <span className="text-sm font-semibold text-neutral-950 tabular-nums dark:text-white">
              {(item.price * item.quantity).toLocaleString("fa-IR")}
              <span className="mr-1 text-xs font-normal text-neutral-500 dark:text-neutral-400">
                تومان
              </span>
            </span>

            {item.quantity > 1 && (
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500">
                {item.price.toLocaleString("fa-IR")} ×{" "}
                {item.quantity.toLocaleString("fa-IR")}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
