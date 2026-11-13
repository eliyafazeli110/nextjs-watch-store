"use client"

import { createContext } from "react"

export interface CartContextValue {
  pendingDelta: number
  changeCartCount: (delta: number) => void
}

export const CartContext = createContext<CartContextValue | null>(null)
CartContext.displayName = "CartContext"
