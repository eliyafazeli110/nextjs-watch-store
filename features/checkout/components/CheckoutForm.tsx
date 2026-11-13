"use client"

import { valibotResolver } from "@hookform/resolvers/valibot"
import { Check } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

import createOrderAction from "@/features/order/actions/create-order.action"
import { toastManager } from "@/lib/utils"

import type { CheckoutInput } from "../schemas/checkout.schema"

import { checkoutSchema } from "../schemas/checkout.schema"
import { OrderSummary } from "./OrderSummary"
import { PaymentMethod } from "./PaymentMethod"
import { ShippingForm } from "./ShippingForm"

export function CheckoutForm({ cart }: { cart: any }) {
  const [step, setStep] = useState(1)

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutInput>({
    resolver: valibotResolver(checkoutSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      province: "",
      city: "",
      address: "",
      postalCode: "",
      paymentMethod: "online",
      note: "",
    },
  })

  const handleNextStep = async () => {
    const isValid = await trigger([
      "firstName",
      "lastName",
      "phone",
      "province",
      "city",
      "address",
      "postalCode",
    ])
    if (isValid) setStep(2)
  }

  const onSubmit = async (data: CheckoutInput) => {
    if (step === 1) {
      toastManager.add({
        title: "اطلاعات گیرنده را تکمیل کنید",
        type: "error",
      })
      return
    }

    const result = await createOrderAction(data)

    if (!result.success) {
      toastManager.add({ title: result.message, type: "error" })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]"
    >
      <div className="flex flex-col gap-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-full bg-neutral-100 text-xs dark:bg-neutral-900">
                ۱
              </span>
              اطلاعات گیرنده
            </h2>
            {step === 2 && <Check className="text-green-500 size-5" />}
          </div>

          {step === 1 && (
            <div className="mt-4 flex flex-col gap-4">
              <ShippingForm register={register} errors={errors} />
              <button type="button" onClick={handleNextStep} className="...">
                ادامه و انتخاب روش پرداخت
              </button>
            </div>
          )}
        </div>

        {step === 2 && (
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 animate-in slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950">
            <h2 className="text-base font-semibold flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-full bg-neutral-100 text-xs dark:bg-neutral-900">
                ۲
              </span>
              روش پرداخت
            </h2>
            <div className="mt-4">
              <PaymentMethod register={register} errors={errors} />
            </div>
          </div>
        )}
      </div>

      <OrderSummary cart={cart} isSubmitting={isSubmitting} />
    </form>
  )
}
