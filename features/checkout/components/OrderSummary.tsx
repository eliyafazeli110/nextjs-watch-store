"use client"

import { ShieldCheck } from "lucide-react"
import Image from "next/image"

import type { CartData } from "@/features/cart/queries/get-cart"

interface OrderSummaryProps {
  cart: CartData
  isSubmitting: boolean
}

const SHIPPING_COST = 50000

export function OrderSummary({ cart, isSubmitting }: OrderSummaryProps) {
  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0)

  const total = subtotal + SHIPPING_COST

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="flex flex-col gap-5 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-neutral-950 dark:text-white">
            خلاصه سفارش
          </h2>
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
            {totalItems} محصول
          </span>
        </div>

        <div className="flex max-h-80 flex-col gap-3 overflow-y-auto pr-1">
          {cart.items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 rounded-xl border border-neutral-100 p-2.5 dark:border-neutral-900"
            >
              <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between py-0.5">
                <p className="line-clamp-1 text-xs font-medium text-neutral-950 dark:text-white">
                  {item.name}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-neutral-500 dark:text-white/40">
                    {item.quantity.toLocaleString("fa-IR")} عدد
                  </span>
                  <span className="text-xs font-semibold text-neutral-950 tabular-nums dark:text-white">
                    {(item.price * item.quantity).toLocaleString("fa-IR")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-500 dark:text-white/50">
              جمع محصولات
            </span>
            <span className="text-neutral-950 tabular-nums dark:text-white">
              {subtotal.toLocaleString("fa-IR")} تومان
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-500 dark:text-white/50">
              هزینه ارسال
            </span>
            <span className="text-neutral-950 tabular-nums dark:text-white">
              {SHIPPING_COST.toLocaleString("fa-IR")} تومان
            </span>
          </div>

          <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-950 dark:text-white">
              مبلغ قابل پرداخت
            </span>
            <span className="text-base font-bold text-neutral-950 tabular-nums dark:text-white">
              {total.toLocaleString("fa-IR")}
              <span className="mr-1 text-xs font-normal text-neutral-500 dark:text-neutral-400">
                تومان
              </span>
            </span>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-neutral-950 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
        >
          {isSubmitting ? "در حال ثبت..." : "تایید و پرداخت"}
        </button>

        <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 dark:text-white/30">
          <ShieldCheck className="size-3.5" />
          اطلاعات شما با اتصال امن ارسال می‌شود
        </div>
      </div>
    </aside>
  )
}
