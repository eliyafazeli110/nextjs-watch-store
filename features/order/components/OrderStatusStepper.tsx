import { Check, Package, Truck, XCircle } from "lucide-react"

import type { OrderStatus } from "../types/order-type"

interface OrderStatusStepperProps {
  status: OrderStatus
}

const steps = [
  { key: "pending", label: "ثبت سفارش", icon: Check },
  { key: "paid", label: "پرداخت", icon: Check },
  { key: "shipped", label: "ارسال", icon: Truck },
  { key: "delivered", label: "تحویل", icon: Package },
] as const

const statusToStepIndex: Record<OrderStatus, number> = {
  pending: 0,
  processing: 1,
  shipped: 2,
  delivered: 3,
  cancelled: -1,
}

export function OrderStatusStepper({ status }: OrderStatusStepperProps) {
  if (status === "cancelled") {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-950 dark:bg-red-950/30">
        <div className="flex size-9 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400">
          <XCircle className="size-4.5" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-red-600 dark:text-red-400">
            سفارش لغو شده
          </span>
          <span className="text-xs text-red-500/80 dark:text-red-400/60">
            این سفارش توسط شما یا پشتیبانی لغو شده است
          </span>
        </div>
      </div>
    )
  }

  const currentIndex = statusToStepIndex[status]

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isCompleted = index <= currentIndex
          const isCurrent = index === currentIndex
          const isLast = index === steps.length - 1

          return (
            <div key={step.key} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`flex size-9 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isCompleted
                      ? "border-neutral-950 bg-neutral-950 text-white dark:border-white dark:bg-white dark:text-neutral-950"
                      : "border-neutral-200 bg-white text-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-700"
                  } ${isCurrent ? "ring-4 ring-neutral-950/10 dark:ring-white/10" : ""} `}
                >
                  <Icon className="size-4" />
                </div>

                <span
                  className={`text-[10px] font-medium whitespace-nowrap transition-colors ${
                    isCompleted
                      ? "text-neutral-950 dark:text-white"
                      : "text-neutral-400 dark:text-white/30"
                  } `}
                >
                  {step.label}
                </span>
              </div>

              {!isLast && (
                <div className="relative mx-2 -mt-6 h-0.5 flex-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                  <div
                    className={`absolute inset-y-0 right-0 bg-neutral-950 transition-all duration-500 dark:bg-white ${index < currentIndex ? "w-full" : "w-0"} `}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
