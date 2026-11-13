"use client"

import { valibotResolver } from "@hookform/resolvers/valibot"
import { ArrowLeft, Loader2, Mail } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"

import type { SigninForm } from "@/features/auth/schemas/sign-in.schema"

import { AuthInput } from "@/features/auth/components/AuthInput"
import { PasswordInput } from "@/features/auth/components/PasswordInput"
import { useSignIn } from "@/features/auth/hooks/use-sign-in"
import { signinSchema } from "@/features/auth/schemas/sign-in.schema"

export default function SignInForm() {
  const { onSubmit } = useSignIn()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninForm>({
    resolver: valibotResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 text-center sm:text-right">
        <h1 className="text-2xl font-extrabold text-neutral-950 dark:text-white">
          ورود
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          برای ادامه، وارد حساب کاربری خود شوید.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
        noValidate
      >
        <AuthInput
          label="ایمیل"
          type="email"
          placeholder="example@email.com"
          icon={Mail}
          dir="ltr"
          autoComplete="email"
          error={errors.email?.message}
          disabled={isSubmitting}
          {...register("email")}
        />

        <PasswordInput
          label="رمز عبور"
          placeholder="رمز عبور خود را وارد کنید"
          dir="ltr"
          autoComplete="current-password"
          error={errors.password?.message}
          disabled={isSubmitting}
          {...register("password")}
        />

        <div className="-mt-2 flex justify-end">
          <Link
            href="/forgot-password"
            className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-950 dark:text-white/50 dark:hover:text-white"
          >
            رمز عبور خود را فراموش کرده‌اید؟
          </Link>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-neutral-950 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              در حال ورود...
            </>
          ) : (
            <>
              ورود به حساب
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            </>
          )}
        </button>
      </form>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="text-[10px] tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
            یا
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
          حساب کاربری ندارید؟{" "}
          <Link
            href="/sign-up"
            className="font-medium text-neutral-950 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
          >
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </div>
  )
}
