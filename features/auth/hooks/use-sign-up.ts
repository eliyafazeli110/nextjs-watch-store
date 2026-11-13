"use client"

import type { SubmitHandler } from "react-hook-form"

import { useRouter } from "next/navigation"
import { useState } from "react"

import type { SignUpFormValues } from "@/features/auth/schemas/sign-up.schema"

import { signUp } from "@/lib/auth-client"
import { toastManager } from "@/lib/utils"

export function useSignUp() {
  const router = useRouter()
  const [isRedirecting, setIsRedirecting] = useState(false)

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    try {
      const res = await signUp.email({
        name: data.firstName,
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
      })

      if (res.error) {
        toastManager.add({
          title: "ثبت‌نام ناموفق",
          description: res.error.message ?? "مشکلی در ثبت‌نام پیش آمد",
          type: "error",
        })
        return
      }

      setIsRedirecting(true)

      toastManager.add({
        title: "حساب شما ساخته شد!",
        description: "در حال انتقال...",
        type: "success",
      })

      router.push("/?welcome=1")
      router.refresh()
    } catch {
      toastManager.add({
        title: "خطا در برقراری ارتباط",
        description: "لطفاً دوباره تلاش کنید.",
        type: "error",
      })
    }
  }

  return { onSubmit, isRedirecting }
}
