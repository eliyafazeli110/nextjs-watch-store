import { Suspense } from "react"

import { CheckoutSkeleton } from "@/components/ui/skeletons/CheckoutSkeleton"
import { getCart } from "@/features/cart/queries/get-cart"
import { CheckoutForm } from "@/features/checkout/components/CheckoutForm"

async function CheckoutContent() {
  const cart = await getCart()

  return <CheckoutForm cart={cart} />
}

export default function CheckoutPage() {
  return (
    <>
      <div className="mb-10 flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl dark:text-white">
          تکمیل سفارش
        </h1>
        <p className="text-sm text-neutral-500 dark:text-white/50">
          اطلاعات ارسال و روش پرداخت را وارد کنید
        </p>
      </div>

      <Suspense fallback={<CheckoutSkeleton />}>
        <CheckoutContent />
      </Suspense>
    </>
  )
}
