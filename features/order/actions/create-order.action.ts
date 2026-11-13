"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import type { CheckoutInput } from "@/features/checkout/schemas/checkout.schema"

import { createOrder } from "../../product/services/createOrder"

export default async function createOrderAction(data: CheckoutInput) {
  let orderId: string

  try {
    orderId = await createOrder(data)
  } catch (error) {
    console.error("createOrderAction:", error)

    return {
      success: false,
      message: "ثبت سفارش انجام نشد. لطفاً دوباره تلاش کنید.",
    }
  }

  revalidatePath("/cart-page")
  revalidatePath("/user/orders")

  redirect(`/checkout/${orderId}`)
}
