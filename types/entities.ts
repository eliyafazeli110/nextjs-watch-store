import type { Product as DbProduct } from "./index"

export type ProductCardType = Pick<
  DbProduct,
  "id" | "name" | "price" | "slug" | "stock"
> & {
  image: string
  quantity: number
}
