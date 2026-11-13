"use server"

import type { ActionResult } from "@/types"

import { getSession } from "@/lib/dal"
import { prisma } from "@/lib/prisma"

import { removeCartItems } from "../servisec/remove-cart-items"

export async function clearCartAction(): Promise<ActionResult> {
  const session = await getSession()

  if (!session) {
    return {
      success: false,
      error: "برای خالی کردن سبد، ابتدا وارد حساب کاربری خود شوید.",
    }
  }

  const cart = await prisma.cart.findUnique({
    where: { userId: session.user.id },
    select: { id: true },
  })

  if (!cart) {
    return { success: true }
  }

  await removeCartItems(prisma, cart.id)

  return { success: true }
}
