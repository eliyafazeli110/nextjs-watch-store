import type { CartItemData } from "./queries/get-cart"
import type { CartAction } from "./types"

export default function cartReducer(
  items: CartItemData[],
  action: CartAction,
): CartItemData[] {
  switch (action.type) {
    case "increment":
      return items.map((item) =>
        item.productId === action.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )

    case "decrement":
      return items
        .map((item) =>
          item.productId === action.productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0)

    case "remove":
      return items.filter((item) => item.productId !== action.productId)

    case "clear":
      return []

    default:
      return items
  }
}
