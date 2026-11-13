"use client"

import { useMemo, useOptimistic } from "react"

import { CartContext } from "./cartContext"

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [pendingDelta, changeCartCount] = useOptimistic(
    0,
    (current: number, delta: number) => current + delta,
  )

  const value = useMemo(
    () => ({ pendingDelta, changeCartCount }),
    [pendingDelta, changeCartCount],
  )

  return <CartContext value={value}>{children}</CartContext>
}
