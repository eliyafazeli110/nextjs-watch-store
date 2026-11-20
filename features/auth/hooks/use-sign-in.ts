"use client"

import type { SubmitHandler } from "react-hook-form"

import { useRouter } from "next/navigation"

import type { SigninForm } from "@/features/auth/schemas/sign-in.schema"

import { signIn } from "@/lib/auth-client"
import { toastManager } from "@/lib/utils"

export function useSignIn() {
  const router = useRouter()

  const onSubmit: SubmitHandler<SigninForm> = async (data) => {
    try {
      const res = await signIn.email({
        email: data.email,
        password: data.password,
      })

      if (res.error) {
        toastManager.add({
          title: "ورود ناموفق",
          description: res.error.message ?? "ایمیل یا رمز عبور اشتباه است",
          type: "error",
        })
        return
      }

      toastManager.add({
        title: "خوش آمدید!",
        description: "ورود به حساب کاربری با موفقیت انجام شد.",
        type: "success",
      })

      router.push("/")
      router.refresh()
    } catch {
      toastManager.add({
        title: "خطا در برقراری ارتباط",
        description: "لطفاً دوباره تلاش کنید.",
        type: "error",
      })
    }
  }

  return { onSubmit }
}
