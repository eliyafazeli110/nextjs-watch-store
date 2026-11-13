"use client"

import { useCartCount } from "../context/use-cart-count"

export function CartBadgeView({ serverCount }: { serverCount: number }) {
  const { pendingDelta } = useCartCount()
  const total = Math.max(0, serverCount + pendingDelta)

  if (total === 0) return null

  return (
    <span className="absolute -top-1 -right-1 flex size-4.5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white dark:ring-neutral-950">
      {total.toLocaleString("fa-IR")}
    </span>
  )
}
