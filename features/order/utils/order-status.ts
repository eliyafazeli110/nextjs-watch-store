import type { OrderStatus as PrismaOrderStatus } from "@/generated/prisma/enums"

import type { OrderStatus } from "../types/order-type"

const statusMap: Record<PrismaOrderStatus, OrderStatus> = {
  PENDING: "pending",
  PROCESSING: "processing",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
}

export function toOrderStatus(status: PrismaOrderStatus): OrderStatus {
  return statusMap[status]
}
