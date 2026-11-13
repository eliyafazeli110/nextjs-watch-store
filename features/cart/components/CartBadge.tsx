import { getCartCount } from "../queries/get-cart-count"
import { CartBadgeView } from "./CartBadgeView"

export async function CartBadge() {
  const count = await getCartCount()
  return <CartBadgeView serverCount={count} />
}
