"use server"

import { revalidatePath } from "next/cache"

import { getSession } from "@/lib/dal"
import { prisma } from "@/lib/prisma"

export async function removeCartItemAction(productId: string) {
  const session = await getSession()

  if (!session) {
    return { success: false, error: "ابتدا وارد شوید" }
  }

  const cart = await prisma.cart.findUnique({
    where: { userId: session.user.id },
    select: { id: true },
  })

  if (!cart) {
    return { success: false, error: "سبد خرید یافت نشد" }
  }

  try {
    await prisma.cartItem.delete({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
    })

    revalidatePath("/", "layout")

    return { success: true }
  } catch {
    return { success: false, error: "محصول در سبد خرید شما یافت نشد" }
  }
}
