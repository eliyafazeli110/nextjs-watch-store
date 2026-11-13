import "server-only"

import type { CheckoutInput } from "@/features/checkout/schemas/checkout.schema"

import { getCart } from "@/features/cart/queries/get-cart"
import { Prisma } from "@/generated/prisma/client"
import { getSession } from "@/lib/dal"
import { prisma } from "@/lib/prisma"

const SHIPPING_COST = 50000

export async function createOrder(data: CheckoutInput) {
  const session = await getSession()

  if (!session?.user) throw new Error("ابتدا وارد حساب کاربری خود شوید.")

  const cart = await getCart()
  if (cart.items.length === 0) throw new Error("سبد خرید شما خالی است.")

  for (const item of cart.items) {
    if (item.quantity > item.stock) {
      throw new Error(`موجودی محصول «${item.name}» کافی نیست.`)
    }
  }

  const subtotal = cart.items.reduce((total, item) => {
    return total.add(new Prisma.Decimal(item.price).mul(item.quantity))
  }, new Prisma.Decimal(0))

  const shippingCost = new Prisma.Decimal(SHIPPING_COST)
  const total = subtotal.add(shippingCost)

  return prisma.$transaction(async (tx) => {
    const order = await tx.order.create({
      data: {
        userId: session.user.id,
        subtotal,
        shippingCost,
        total,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        province: data.province,
        city: data.city,
        address: data.address,
        postalCode: data.postalCode,
        note: data.note?.trim() ?? null,
        paymentMethod: data.paymentMethod === "online" ? "ONLINE" : "COD",
        status: "PROCESSING",
      },
    })

    await tx.orderItem.createMany({
      data: cart.items.map((item) => ({
        orderId: order.id,
        productId: item.productId,
        productName: item.name,
        unitPrice: item.price,
        quantity: item.quantity,
      })),
    })

    const stockResults = await Promise.all(
      cart.items.map((item) =>
        tx.product.updateMany({
          where: {
            id: item.productId,
            stock: { gte: item.quantity },
          },
          data: { stock: { decrement: item.quantity } },
        }),
      ),
    )

    const failedStockIndex = stockResults.findIndex((res) => res.count !== 1)

    if (failedStockIndex !== -1) {
      throw new Error(
        `موجودی محصول «${cart.items[failedStockIndex].name}» کافی نیست.`,
      )
    }

    await tx.cartItem.deleteMany({
      where: { cartId: cart.id },
    })

    return order.id
  })
}
