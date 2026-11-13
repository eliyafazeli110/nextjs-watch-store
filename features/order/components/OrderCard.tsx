"use client"

import { ChevronLeft } from "lucide-react"
import Link from "next/link"

interface OrderCardProps {
  order: {
    id: string
    createdAt: Date
    total: number
    status: "cancelled" | "delivered" | "pending" | "processing" | "shipped"
    itemsCount: number
  }
}

const statusMap = {
  pending: {
    label: "در انتظار پرداخت",
    color:
      "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400",
  },
  processing: {
    label: "پرداخت شده",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400",
  },
  shipped: {
    label: "ارسال شده",
    color:
      "bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-400",
  },
  delivered: {
    label: "تحویل شده",
    color:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400",
  },
  cancelled: {
    label: "لغو شده",
    color: "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400",
  },
} as const

export function OrderCard({ order }: OrderCardProps) {
  const status = statusMap[order.status]

  return (
    <Link
      href={`/user/orders/${order.id}`}
      className="group flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm sm:flex-row sm:items-center sm:justify-between dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase dark:text-white/30">
            شماره سفارش
          </span>
          <span className="text-sm font-semibold text-neutral-950 tabular-nums dark:text-white">
            #{order.id.slice(0, 8)}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase dark:text-white/30">
            تاریخ
          </span>
          <span className="text-sm text-neutral-950 dark:text-white">
            {new Date(order.createdAt).toLocaleDateString("fa-IR")}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase dark:text-white/30">
            تعداد
          </span>
          <span className="text-sm text-neutral-950 tabular-nums dark:text-white">
            {order.itemsCount.toLocaleString("fa-IR")} عدد
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <span
          className={`rounded-full px-3 py-1 text-[10px] font-medium ${status.color}`}
        >
          {status.label}
        </span>

        <span className="text-sm font-bold text-neutral-950 tabular-nums dark:text-white">
          {order.total.toLocaleString("fa-IR")}
          <span className="mr-1 text-xs font-normal text-neutral-500 dark:text-white/50">
            تومان
          </span>
        </span>

        <ChevronLeft className="size-4 text-neutral-400 transition-transform group-hover:-translate-x-1 dark:text-white/30" />
      </div>
    </Link>
  )
}
