import type { Metadata } from "next"

import { Lock, ShieldCheck } from "lucide-react"
import { notFound, redirect } from "next/navigation"
import { Suspense } from "react"

import { PaymentPageSkeleton } from "@/components/ui/skeletons/PaymentPageSkeleton"
import { PaymentConfirmForm } from "@/features/checkout/components/PaymentConfirmForm"
import { getOrderById } from "@/features/order/queries/getOrderById"

interface PaymentPageProps {
  params: Promise<{ orderId: string }>
}

export async function generateMetadata({
  params,
}: PaymentPageProps): Promise<Metadata> {
  const { orderId } = await params

  return {
    title: `پرداخت سفارش #${orderId.slice(0, 8)} | واچ‌لند`,
    description: "صفحه تایید و پرداخت سفارش در فروشگاه واچ‌لند.",
    robots: {
      index: false,
      follow: false,
    },
  }
}

async function PaymentContent({ params }: PaymentPageProps) {
  const { orderId } = await params
  const order = await getOrderById(orderId)

  if (!order) notFound()

  if (order.status !== "pending") {
    redirect(`/checkout/success?orderId=${order.id}`)
  }

  return (
    <>
      <div className="mb-6 flex flex-col items-center gap-3">
        <div className="flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
          <ShieldCheck className="size-7" />
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white">
            پرداخت سفارش
          </h1>
          <p className="text-sm text-neutral-500 dark:text-white/50">
            برای تکمیل سفارش، پرداخت را تأیید کنید
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mb-6 flex flex-col items-center gap-1 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900/50">
          <span className="text-xs text-neutral-500 dark:text-white/50">
            مبلغ قابل پرداخت
          </span>
          <span className="text-2xl font-bold text-neutral-950 tabular-nums dark:text-white">
            {order.total.toLocaleString("fa-IR")}
            <span className="mr-1 text-sm font-normal text-neutral-500 dark:text-white/40">
              تومان
            </span>
          </span>
          <span className="mt-1 text-[10px] text-neutral-400 dark:text-white/30">
            سفارش #{order.id.slice(0, 8)}
          </span>
        </div>

        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-3 dark:border-amber-950 dark:bg-amber-950/30">
          <p className="text-xs leading-6 text-amber-700 dark:text-amber-400">
            ⚠️ این یک <strong>محیط تستی</strong> است. پرداخت واقعی انجام نمی‌شود
            و مبلغی از حساب شما کسر نخواهد شد.
          </p>
        </div>

        <PaymentConfirmForm orderId={order.id} />
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-neutral-400 dark:text-white/30">
        <Lock className="size-3" />
        اتصال امن با رمزنگاری SSL
      </div>
    </>
  )
}

export default function PaymentPage({ params }: PaymentPageProps) {
  return (
    <div className="mx-auto w-full max-w-md">
      <Suspense fallback={<PaymentPageSkeleton />}>
        <PaymentContent params={params} />
      </Suspense>
    </div>
  )
}
