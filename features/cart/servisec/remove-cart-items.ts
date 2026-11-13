import "server-only"

import type { Prisma, PrismaClient } from "@/generated/prisma/client"

type DbClient = Prisma.TransactionClient | PrismaClient

export async function removeCartItems(db: DbClient, cartId: string) {
  await db.cartItem.deleteMany({
    where: {
      cartId,
    },
  })
}
