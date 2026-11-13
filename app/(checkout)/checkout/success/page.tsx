import { CheckCircle2, Package, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

import { SuccessPageSkeleton } from "@/components/ui/skeletons/SuccessPageSkeleton"

interface SuccessPageProps {
  searchParams: Promise<{ orderId?: string }>
}

async function SuccessContent({ searchParams }: SuccessPageProps) {
  const { orderId } = await searchParams

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center text-center">
      <div className="relative">
        <div className="absolute inset-0 -m-4 animate-pulse rounded-full bg-emerald-500/10 dark:bg-emerald-400/10" />
        <div className="absolute inset-0 -m-8 rounded-full border border-emerald-500/20 dark:border-emerald-400/20" />

        <div className="relative flex size-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-lg shadow-emerald-500/20 dark:bg-emerald-950/50 dark:text-emerald-400">
          <CheckCircle2 className="size-10" />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl dark:text-white">
          سفارش شما با موفقیت ثبت شد!
        </h1>

        <p className="max-w-md text-sm leading-7 text-neutral-500 dark:text-white/50">
          از خرید شما سپاسگزاریم. جزئیات سفارش برای شما پیامک خواهد شد.
          می‌توانید وضعیت سفارش را از پنل کاربری پیگیری کنید.
        </p>
      </div>

      {orderId && (
        <div className="mt-8 flex w-full flex-col items-center gap-2 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/50">
          <span className="text-[10px] font-medium tracking-[0.25em] text-neutral-400 uppercase dark:text-white/30">
            شماره سفارش
          </span>
          <span className="font-mono text-base font-bold tracking-wider text-neutral-950 tabular-nums dark:text-white">
            #{orderId.slice(0, 8).toUpperCase()}
          </span>
        </div>
      )}

      <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
        {orderId && (
          <Link
            href={`/user/orders/${orderId}`}
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 active:scale-[0.98] dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            <Package className="size-4 transition-transform group-hover:scale-110" />
            مشاهده سفارش
          </Link>
        )}

        <Link
          href="/"
          className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-neutral-200 px-6 text-sm font-medium text-neutral-950 transition-all duration-200 hover:border-neutral-950 hover:bg-neutral-50 active:scale-[0.98] dark:border-neutral-800 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/5"
        >
          <ShoppingBag className="size-4 transition-transform group-hover:scale-110" />
          صفحه اصلی
        </Link>
      </div>

      <Link
        href="/user/orders"
        className="mt-6 text-xs font-medium text-neutral-400 transition-colors hover:text-neutral-950 dark:text-white/40 dark:hover:text-white"
      >
        مشاهده همه سفارش‌ها
      </Link>
    </div>
  )
}

export default function CheckoutSuccessPage({
  searchParams,
}: SuccessPageProps) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-4">
      <Suspense fallback={<SuccessPageSkeleton />}>
        <SuccessContent searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
