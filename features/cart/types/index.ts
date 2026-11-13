import type { ProductCardType } from "@/types/entities"

export interface CartItemType {
  id: string
  quantity: number
  product: ProductCardType
}

export type CartAction =
  | { type: "clear" }
  | { type: "decrement"; productId: string }
  | { type: "increment"; productId: string }
  | { type: "remove"; productId: string }
