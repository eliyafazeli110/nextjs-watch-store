import { Suspense } from "react"

import { CartPageSkeleton } from "@/components/ui/skeletons/CartPageSkeleton"
import { CartItemsList } from "@/features/cart/components/CartItemsList"
import EmptyCart from "@/features/cart/components/EmptyCart"
import { getCart } from "@/features/cart/queries/get-cart"

async function CartContent() {
  const cart = await getCart()

  if (cart.items.length === 0) {
    return <EmptyCart />
  }

  return <CartItemsList cart={cart} />
}

export default function CartPage() {
  return (
    <Suspense fallback={<CartPageSkeleton />}>
      <CartContent />
    </Suspense>
  )
}
