import "server-only"

import { getSession } from "@/lib/dal"
import { prisma } from "@/lib/prisma"

export async function getCartCount() {
  const session = await getSession()

  if (!session) return 0

  const result = await prisma.cartItem.aggregate({
    where: {
      cart: {
        userId: session.user.id,
      },
    },
    _sum: {
      quantity: true,
    },
  })

  return result._sum.quantity ?? 0
}
