import type { Metadata } from "next"

import { notFound } from "next/navigation"
import { Suspense } from "react"

import { OrderDetailSkeleton } from "@/components/ui/skeletons/OrderDetailSkeleton"
import { OrderAddressCard } from "@/features/order/components/OrderAddressCard"
import { OrderItemsList } from "@/features/order/components/OrderItemList"
import { OrderPaymentCard } from "@/features/order/components/OrderPaymentCard"
import { OrderStatusStepper } from "@/features/order/components/OrderStatusStepper"
import { getOrderById } from "@/features/order/queries/getOrderById"

interface OrderDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: OrderDetailPageProps): Promise<Metadata> {
  const { id } = await params

  return {
    title: `جزئیات سفارش #${id.slice(0, 8)} | واچ‌لند`,
    description: "مشاهده جزئیات و وضعیت سفارش در فروشگاه واچ‌لند.",
    robots: {
      index: false,
      follow: false,
    },
  }
}

async function OrderDetailContent({ params }: OrderDetailPageProps) {
  const { id } = await params
  const order = await getOrderById(id)

  if (!order) notFound()

  return (
    <div className="flex flex-col gap-6">
      <OrderStatusStepper status={order.status} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
        <div className="flex flex-col gap-6">
          <OrderItemsList items={order.items} subtotal={order.subtotal} />
        </div>

        <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
          <OrderAddressCard
            firstName={order.firstName}
            lastName={order.lastName}
            phone={order.phone}
            province={order.province}
            city={order.city}
            address={order.address}
            postalCode={order.postalCode}
            note={order.note}
          />

          <OrderPaymentCard
            subtotal={order.subtotal}
            shippingCost={order.shippingCost}
            total={order.total}
            paymentMethod={order.paymentMethod}
          />
        </div>
      </div>
    </div>
  )
}

export default function OrderDetailPage({ params }: OrderDetailPageProps) {
  return (
    <Suspense fallback={<OrderDetailSkeleton />}>
      <OrderDetailContent params={params} />
    </Suspense>
  )
}
