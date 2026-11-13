"use client"

import { Check, ShoppingCart } from "lucide-react"
import { useState, useTransition } from "react"

import { addToCartAction } from "@/features/cart/actions/add-to-cart.action"
import { toastManager } from "@/lib/utils"

import { useCartCount } from "../context/use-cart-count"

interface CartBtnProps {
  productId: string
  stock: number
  isLoggedIn: boolean
  cartQuantity?: number
}

type Status = "idle" | "success"

export function CartButton({
  productId,
  stock,
  isLoggedIn,
  cartQuantity = 0,
}: CartBtnProps) {
  const [status, setStatus] = useState<Status>("idle")

  const [, startTransition] = useTransition()

  const { changeCartCount } = useCartCount()

  function handleAddToCart() {
    if (status !== "idle") return

    if (!isLoggedIn) {
      toastManager.add({
        type: "error",
        description: "لطفا اول ثبت‌نام کنید یا وارد حساب کاربری خود شوید.",
      })
      return
    }

    setStatus("success")

    setTimeout(() => {
      setStatus("idle")
    }, 1500)

    toastManager.add({
      type: "success",
      description: "افزودن محصول با موفقیت انجام شد.",
    })

    startTransition(async () => {
      changeCartCount(1)

      try {
        const result = await addToCartAction({ productId, delta: 1 })

        if (!result.success) {
          toastManager.add({
            type: "error",
            description: "افزودن محصول انجام نشد. دوباره تلاش کنید.",
          })
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "خطایی رخ داد. دوباره تلاش کنید."

        toastManager.add({
          type: "error",
          description: errorMessage,
        })
      }
    })
  }

  if (stock <= 0 || cartQuantity >= stock) {
    return (
      <button
        type="button"
        disabled
        aria-label="ناموجود"
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-200 opacity-40 dark:bg-neutral-800"
      >
        <ShoppingCart className="size-4" />
      </button>
    )
  }

  return (
    <button
      type="button"
      aria-label="افزودن به سبد خرید"
      disabled={status !== "idle"}
      onClick={handleAddToCart}
      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-80 dark:bg-white dark:text-neutral-950 hover:cursor-pointer"
    >
      {status === "success" ? (
        <Check className="size-4" />
      ) : (
        <ShoppingCart className="size-4" />
      )}
    </button>
  )
}
