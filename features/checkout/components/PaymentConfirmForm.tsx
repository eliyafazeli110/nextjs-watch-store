"use client"

import { CreditCard, Loader2 } from "lucide-react"
import { useState, useTransition } from "react"

import { confirmPaymentAction } from "@/features/order/actions/confirm-payment.action"
import { toastManager } from "@/lib/utils"

interface PaymentConfirmFormProps {
  orderId: string
}

export function PaymentConfirmForm({ orderId }: PaymentConfirmFormProps) {
  const [isPending, startTransition] = useTransition()
  const [isRedirecting, setIsRedirecting] = useState(false)

  const handleConfirm = () => {
    if (isPending || isRedirecting) return

    startTransition(async () => {
      try {
        const result = await confirmPaymentAction(orderId)

        if (!result.success) {
          toastManager.add({
            title: result.message,
            type: "error",
          })
          return
        }

        setIsRedirecting(true)
        toastManager.add({
          title: "پرداخت با موفقیت انجام شد",
          type: "success",
        })
      } catch {
        toastManager.add({
          title: "خطا در برقراری ارتباط با سرور",
          type: "error",
        })
      }
    })
  }

  const isLoading = isPending || isRedirecting

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={handleConfirm}
        disabled={isLoading}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-neutral-950 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
      >
        {isLoading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            در حال پردازش...
          </>
        ) : (
          <>
            <CreditCard className="size-4" />
            تأیید و پرداخت
          </>
        )}
      </button>

      <p className="text-center text-[10px] leading-5 text-neutral-400 dark:text-white/30">
        با کلیک روی دکمه بالا، پرداخت را تأیید می‌کنید.
        <br />
        این یک پرداخت تستی است و مبلغی کسر نمی‌شود.
      </p>
    </div>
  )
}
