"use client"

import { use } from "react"

import { CartContext } from "./cartContext"

export function useCartCount() {
  const ctx = use(CartContext)
  if (!ctx) throw new Error("useCartCount must be used within CartProvider")
  return ctx
}
