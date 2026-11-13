import { requireAuth } from "@/lib/dal"
import { prisma } from "@/lib/prisma"

export async function getCart() {
  const session = await requireAuth()

  const cart = await prisma.cart.findUnique({
    where: { userId: session.user.id },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  })

  console.log(
    "[getCart] Database result:",
    cart?.items.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
    })),
  )

  if (!cart) {
    return {
      items: [],
    }
  }

  return {
    id: cart.id,
    items: cart.items.map((item) => ({
      id: item.id,
      productId: item.productId,
      quantity: item.quantity,
      name: item.product.name,
      slug: item.product.slug,
      price: item.product.price,
      stock: item.product.stock,
      image: item.product.images[0] ?? null,
      imageAlt: item.product.name,
    })),
  }
}

export type CartData = Awaited<ReturnType<typeof getCart>>
export type CartItemData = CartData["items"][number]
