import { headers } from "next/headers"

import type { Product } from "@/types"

import { getCartQuantities } from "@/features/cart/queries/get-cart-quantities"
import { auth } from "@/lib/auth"

import { ProductCard } from "./ProductCard"

export default async function ProductList({
  data,
  limit,
}: {
  data: Product[]
  limit?: number
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const limitData = limit ? data.slice(0, limit) : data

  const { quantities } = await getCartQuantities()

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
      {limitData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isLoggedIn={!!session}
          cartQuantity={quantities[product.id] || 0}
        />
      ))}
    </div>
  )
}
