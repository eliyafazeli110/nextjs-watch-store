import "server-only"

import { getSession } from "@/lib/dal"
import { prisma } from "@/lib/prisma"

export async function getCartQuantities() {
  const session = await getSession()

  if (!session)
    return { isLoggedIn: false, quantities: {} as Record<string, number> }

  const items = await prisma.cartItem.findMany({
    where: { cart: { userId: session.user.id } },
    select: { productId: true, quantity: true },
  })

  return {
    isLoggedIn: true,
    quantities: Object.fromEntries(items.map((i) => [i.productId, i.quantity])),
  }
}
