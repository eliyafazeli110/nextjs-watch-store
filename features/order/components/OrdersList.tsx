"use client"

import { Package } from "lucide-react"
import Link from "next/link"

import type { OrderListItem } from "@/features/order/types/order-type"

import { OrderCard } from "./OrderCard"

interface OrdersListProps {
  orders: OrderListItem[]
}

export function OrdersList({ orders }: OrdersListProps) {
  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-neutral-300 bg-white py-16 text-center dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex size-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 dark:bg-neutral-900 dark:text-neutral-600">
          <Package className="size-6" />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-neutral-950 dark:text-white">
            هنوز سفارشی ثبت نکرده‌اید
          </p>
          <p className="text-xs text-neutral-500 dark:text-white/50">
            اولین سفارش خود را ثبت کنید
          </p>
        </div>

        <Link
          href="/products"
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2 text-xs font-medium text-neutral-950 transition-all duration-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white dark:border-white/20 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-neutral-950"
        >
          مشاهده محصولات
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}
