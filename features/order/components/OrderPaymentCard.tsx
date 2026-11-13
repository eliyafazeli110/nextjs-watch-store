import { CreditCard, Wallet } from "lucide-react"

interface OrderPaymentCardProps {
  subtotal: number
  shippingCost: number
  total: number
  paymentMethod: "cod" | "online"
}

export function OrderPaymentCard({
  subtotal,
  shippingCost,
  total,
  paymentMethod,
}: OrderPaymentCardProps) {
  const methodLabel =
    paymentMethod === "online" ? "پرداخت آنلاین" : "پرداخت در محل"
  const MethodIcon = paymentMethod === "online" ? CreditCard : Wallet

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950">
      <h2 className="mb-4 text-base font-semibold text-neutral-950 dark:text-white">
        جزئیات پرداخت
      </h2>

      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 dark:bg-neutral-900 dark:text-white/40">
            <MethodIcon className="size-4" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-medium tracking-wider text-neutral-400 uppercase dark:text-white/30">
              روش پرداخت
            </span>
            <span className="text-sm text-neutral-950 dark:text-white">
              {methodLabel}
            </span>
          </div>
        </div>

        <div className="h-px bg-neutral-100 dark:bg-neutral-900" />

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
              {shippingCost === 0
                ? "رایگان"
                : `${shippingCost.toLocaleString("fa-IR")} تومان`}
            </span>
          </div>

          <div className="h-px bg-neutral-100 dark:bg-neutral-900" />

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-950 dark:text-white">
              مبلغ کل
            </span>
            <span className="text-base font-bold text-neutral-950 tabular-nums dark:text-white">
              {total.toLocaleString("fa-IR")}
              <span className="mr-1 text-xs font-normal text-neutral-500 dark:text-neutral-400">
                تومان
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
