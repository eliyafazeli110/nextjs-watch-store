import "server-only"

import { getSession } from "@/lib/dal"
import { prisma } from "@/lib/prisma"

import type { OrderDetail } from "../types/order-type"

import { toOrderStatus } from "../utils/order-status"

export async function getOrderById(
  orderId: string,
): Promise<OrderDetail | null> {
  const session = await getSession()

  if (!session?.user) return null

  const order = await prisma.order.findFirst({
    where: {
      id: orderId,
      userId: session.user.id,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  })

  if (!order) return null

  return {
    id: order.id,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
    status: toOrderStatus(order.status),
    subtotal: Number(order.subtotal),
    shippingCost: Number(order.shippingCost),
    total: Number(order.total),
    paymentMethod: "cod",
    firstName: order.firstName,
    lastName: order.lastName,
    phone: order.phone,
    province: order.province,
    city: order.city,
    address: order.address,
    postalCode: order.postalCode,
    note: order.note,
    items: order.items.map((item) => ({
      id: item.id,
      productId: item.productId,
      name: item.product.name,
      slug: item.product.slug,
      image: item.product.images[0] ?? null,
      imageAlt: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
    })),
  }
}
