import "server-only"

import { getSession } from "@/lib/dal"
import { prisma } from "@/lib/prisma"

import type { OrderListItem } from "../types/order-type"

export async function getUserOrders(): Promise<OrderListItem[] | null> {
  const session = await getSession()

  if (!session?.user) return []

  const orders = await prisma.order.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          items: true,
        },
      },
    },
  })

  return orders.map((order) => ({
    id: order.id,
    createdAt: order.createdAt,
    total: Number(order.total),
    status: order.status.toLowerCase() as OrderListItem["status"],
    itemsCount: order._count.items,
  }))
}
