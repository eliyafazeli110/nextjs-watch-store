"use client"

import { useRouter } from "next/navigation"
import { useOptimistic, useTransition } from "react"

import { toastManager } from "@/lib/utils"

import type { CartItemData } from "../queries/get-cart"

import { addToCartAction } from "../actions/add-to-cart.action"
import { clearCartAction } from "../actions/clear-cart.action"
import { removeCartItemAction } from "../actions/remove-cart-item.action"
import cartReducer from "../cart-reducer"
import { useCartCount } from "../context/use-cart-count"

export function useCart(initialItems: CartItemData[]) {
  const [isPending, startTransition] = useTransition()

  const router = useRouter()

  const { changeCartCount } = useCartCount()

  const [optimisticItems, addOptimistic] = useOptimistic(
    initialItems,
    cartReducer,
  )

  const handleUpdateQuantity = (productId: string, delta: -1 | 1) => {
    const type = delta === 1 ? "increment" : "decrement"

    startTransition(async () => {
      addOptimistic({ type, productId })

      changeCartCount(delta)

      try {
        const result = await addToCartAction({ productId, delta })

        if (!result.success) {
          toastManager.add({
            type: "error",
            description: result.error,
          })
          return
        }

        router.refresh()
      } catch {
        toastManager.add({
          type: "error",
          description: "خطایی رخ داد. دوباره تلاش کنید",
        })
      }
    })
  }

  const handleRemoveItem = (productId: string) => {
    const item = optimisticItems.find((i) => i.productId === productId)

    if (!item) return

    startTransition(async () => {
      addOptimistic({ type: "remove", productId })

      changeCartCount(-item.quantity)

      try {
        const result = await removeCartItemAction(productId)

        if (!result.success) {
          toastManager.add({
            type: "error",
            description: result.error,
          })
          return
        }

        router.refresh()
      } catch {
        toastManager.add({
          type: "error",
          description: "حذف محصول انجام نشد",
        })
      }
    })
  }

  const handleClearCart = () => {
    startTransition(async () => {
      addOptimistic({ type: "clear" })

      try {
        const result = await clearCartAction()

        if (!result.success) {
          toastManager.add({
            type: "error",
            description: result.error,
          })
          return
        }

        toastManager.add({
          type: "success",
          description: "سبد خرید خالی شد",
        })

        router.refresh()
      } catch {
        toastManager.add({
          type: "error",
          description: "خطایی رخ داد. دوباره تلاش کنید",
        })
      }
    })
  }

  return {
    items: optimisticItems,
    isPending,
    handleUpdateQuantity,
    handleRemoveItem,
    handleClearCart,
  }
}
