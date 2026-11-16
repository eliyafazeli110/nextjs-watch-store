import { Suspense } from "react"

import { OrderCardSkeleton } from "@/components/ui/skeletons/OrderCardSkeleton"
import { OrdersList } from "@/features/order/components/OrdersList"
import { getUserOrders } from "@/features/order/queries/getUserOrders"

async function OrdersContent() {
  const orders = await getUserOrders()

  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          شما هنوز هیچ سفارشی ثبت نکرده‌اید.
        </p>
      </div>
    )
  }

  return <OrdersList orders={orders} />
}

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold text-neutral-950 dark:text-white">
        سفارش‌های من
      </h1>

      <Suspense fallback={<OrderCardSkeleton />}>
        <OrdersContent />
      </Suspense>
    </div>
  )
}
