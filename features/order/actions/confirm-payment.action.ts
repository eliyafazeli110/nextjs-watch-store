"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { getSession } from "@/lib/dal"
import { prisma } from "@/lib/prisma"

export async function confirmPaymentAction(orderId: string) {
  const session = await getSession()

  if (!session?.user) throw new Error("ابتدا وارد حساب کاربری خود شوید.")

  const order = await prisma.order.findFirst({
    where: {
      id: orderId,
      userId: session.user.id,
    },
    select: {
      id: true,
      status: true,
      paymentMethod: true,
    },
  })

  if (!order) {
    return { success: false, message: "سفارش پیدا نشد" }
  }

  if (order.status !== "PENDING") {
    return { success: false, message: "این سفارش قبلاً پرداخت شده است" }
  }

  await new Promise((resolve) => {
    setTimeout(resolve, 1500)
  })

  await prisma.order.update({
    where: { id: orderId },
    data: {
      status: order.paymentMethod === "ONLINE" ? "PROCESSING" : "PENDING",
    },
  })

  revalidatePath("/user/orders")
  revalidatePath(`/user/orders/${orderId}`)

  redirect(`/checkout/success?orderId=${orderId}`)
}
