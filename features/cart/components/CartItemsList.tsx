"use client"

import type { CartData } from "../queries/get-cart"
import { useCart } from "../hooks/use-cart"
import CartItemCard from "./CartItemCard"
import CartSummary from "./CartSummary"
import { ClearCartBtn } from "./ClearCartBtn"
import EmptyCart from "./EmptyCart"

interface CartItemsListProps {
  cart: CartData
}

export function CartItemsList({ cart }: CartItemsListProps) {
  const {
    items,
    isPending,
    handleUpdateQuantity,
    handleRemoveItem,
    handleClearCart,
  } = useCart(cart.items)

  if (items.length === 0) {
    return <EmptyCart />
  }

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  return (
    <div className="mx-auto w-full max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between py-2 sm:py-4">
        <h1 className="text-lg font-bold text-neutral-950 sm:text-xl dark:text-white">
          سبد خرید
          <span className="mr-2 text-xs font-normal text-neutral-500 sm:text-sm">
            ({items.length.toLocaleString("fa-IR")} کالا)
          </span>
        </h1>
        <ClearCartBtn handleClearCart={handleClearCart} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-8">
        <div className="flex flex-col gap-3 sm:gap-4">
          {items.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              isPending={isPending}
              onDecrease={() => handleUpdateQuantity(item.productId, -1)}
              onIncrease={() => handleUpdateQuantity(item.productId, 1)}
              onRemove={() => handleRemoveItem(item.productId)}
            />
          ))}
        </div>

        <div className="w-full lg:sticky lg:top-24">
          <CartSummary totalCount={totalCount} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  )
}
