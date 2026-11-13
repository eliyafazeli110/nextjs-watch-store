"use client"

import type { FieldErrors, UseFormRegister } from "react-hook-form"

import { CreditCard, Wallet } from "lucide-react"

import type { CheckoutInput } from "../schemas/checkout.schema"

interface PaymentMethodProps {
  register: UseFormRegister<CheckoutInput>
  errors: FieldErrors<CheckoutInput>
}

const methods = [
  {
    value: "online" as const,
    label: "پرداخت آنلاین",
    description: "پرداخت امن با کارت بانکی",
    icon: CreditCard,
  },
  {
    value: "cod" as const,
    label: "پرداخت در محل",
    description: "پرداخت هنگام تحویل سفارش",
    icon: Wallet,
  },
]

export function PaymentMethod({ register, errors }: PaymentMethodProps) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex size-8 items-center justify-center rounded-full bg-neutral-100 text-xs font-bold text-neutral-950 dark:bg-neutral-900 dark:text-white">
          ۲
        </span>
        <h2 className="text-base font-semibold text-neutral-950 dark:text-white">
          روش پرداخت
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {methods.map((method) => {
          const Icon = method.icon

          return (
            <label
              key={method.value}
              className="group relative flex cursor-pointer items-center gap-4 rounded-xl border border-neutral-200 p-4 transition-all duration-200 hover:border-neutral-950 hover:bg-neutral-50 has-checked:border-neutral-950 has-checked:bg-neutral-50 has-checked:ring-2 has-checked:ring-neutral-950/10 dark:border-neutral-800 dark:hover:border-white dark:hover:bg-white/5 dark:has-checked:border-white dark:has-checked:bg-white/5 dark:has-checked:ring-white/10"
            >
              <input
                type="radio"
                value={method.value}
                className="sr-only"
                {...register("paymentMethod")}
              />

              <span className="flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-neutral-300 transition-colors group-has-checked:border-neutral-950 dark:border-neutral-700 dark:group-has-checked:border-white">
                <span className="size-2.5 rounded-full bg-neutral-950 opacity-0 transition-opacity group-has-checked:opacity-100 dark:bg-white" />
              </span>

              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:group-hover:bg-neutral-800">
                <Icon className="size-4.5" />
              </span>

              <span className="flex flex-1 flex-col">
                <span className="text-sm font-medium text-neutral-950 dark:text-white">
                  {method.label}
                </span>
                <span className="mt-0.5 text-xs text-neutral-500 dark:text-white/50">
                  {method.description}
                </span>
              </span>
            </label>
          )
        })}
      </div>

      {errors.paymentMethod?.message && (
        <p className="mt-3 text-xs text-red-500 dark:text-red-400">
          {errors.paymentMethod.message}
        </p>
      )}
    </section>
  )
}
