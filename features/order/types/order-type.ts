export type OrderStatus =
  "cancelled" | "delivered" | "pending" | "processing" | "shipped"

export interface OrderListItem {
  id: string
  createdAt: Date
  total: number
  status: OrderStatus
  itemsCount: number
}

export interface OrderDetail {
  id: string
  createdAt: Date
  updatedAt: Date
  status: OrderStatus
  subtotal: number
  shippingCost: number
  total: number
  paymentMethod: "cod" | "online"

  firstName: string
  lastName: string
  phone: string
  province: string
  city: string
  address: string
  postalCode: string
  note: string | null

  items: OrderItemDetail[]
}

export interface OrderItemDetail {
  id: string
  productId: string
  name: string
  slug: string
  image: string | null
  imageAlt: string
  price: number
  quantity: number
}
