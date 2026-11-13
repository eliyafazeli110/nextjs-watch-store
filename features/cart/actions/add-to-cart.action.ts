"use server"

import { revalidatePath } from "next/cache"
import * as v from "valibot"

import type { ActionResult } from "@/types"

import { getSession } from "@/lib/dal"
import { prisma } from "@/lib/prisma"

const cartActionSchema = v.object({
  productId: v.pipe(v.string(), v.minLength(1)),
  delta: v.picklist([-1, 1]),
})

const MAX_PER_ITEM = 5

export async function addToCartAction(input: unknown): Promise<ActionResult> {
  try {
    const parsed = v.safeParse(cartActionSchema, input)

    if (!parsed.success)
      return { success: false, error: "اطلاعات ارسالی نامعتبر است" }

    const { productId, delta } = parsed.output

    const session = await getSession()

    if (!session) return { success: false, error: "ابتدا وارد شوید" }

    const userId = session.user.id

    if (delta === -1) {
      const item = await prisma.cartItem.findFirst({
        where: { productId, cart: { userId } },
      })
      if (!item) return { success: false, error: "محصول در سبد نیست" }

      if (item.quantity <= 1) {
        await prisma.cartItem.delete({ where: { id: item.id } })
      } else {
        await prisma.cartItem.update({
          where: { id: item.id },
          data: { quantity: { decrement: 1 } },
        })
      }

      revalidatePath("/", "layout")
      return { success: true }
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: { stock: true },
    })
    if (!product) return { success: false, error: "محصول پیدا نشد" }
    if (product.stock <= 0)
      return { success: false, error: "این محصول ناموجود است" }

    const limit = Math.min(product.stock, MAX_PER_ITEM)

    const cart = await prisma.cart.upsert({
      where: { userId },
      update: {},
      create: { userId },
    })

    const existing = await prisma.cartItem.findUnique({
      where: { cartId_productId: { cartId: cart.id, productId } },
    })

    if ((existing?.quantity ?? 0) >= limit) {
      return {
        success: false,
        error: "تعداد درخواستی بیشتر از موجودی یا سقف مجاز است",
      }
    }

    await prisma.cartItem.upsert({
      where: { cartId_productId: { cartId: cart.id, productId } },
      update: { quantity: { increment: 1 } },
      create: { cartId: cart.id, productId, quantity: 1 },
    })

    revalidatePath("/", "layout")
    return { success: true }
  } catch (error) {
    console.error("addToCartAction failed:", error)
    return { success: false, error: "خطای سیستمی، لطفاً بعداً تلاش کنید" }
  }
}
