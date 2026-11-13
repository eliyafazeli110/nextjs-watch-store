import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface CartSummaryProps {
  totalCount: number
  totalPrice: number
}

export default function CartSummary({
  totalCount,
  totalPrice,
}: CartSummaryProps) {
  return (
    <aside className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 lg:sticky dark:border-neutral-800 dark:bg-neutral-900/50">
      <h2 className="text-sm font-semibold text-neutral-950 dark:text-white">
        خلاصه سفارش
      </h2>

      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span>تعداد اقلام</span>

        <span className="tabular-nums">
          {totalCount.toLocaleString("fa-IR")} عدد
        </span>
      </div>

      <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-neutral-950 dark:text-white">
          جمع کل
        </span>

        <span className="text-base font-semibold text-neutral-950 tabular-nums dark:text-white">
          {totalPrice.toLocaleString("fa-IR")}

          <span className="mr-1 text-xs font-normal text-neutral-500 dark:text-neutral-400">
            تومان
          </span>
        </span>
      </div>

      <Link
        href="/checkout"
        className="flex h-12 items-center justify-center gap-2 rounded-full bg-neutral-950 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
      >
        تکمیل خرید
        <ArrowLeft className="size-4" />
      </Link>
    </aside>
  )
}
