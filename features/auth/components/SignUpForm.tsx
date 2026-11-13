"use client"

import { valibotResolver } from "@hookform/resolvers/valibot"
import { ArrowLeft, Loader2, Mail, Phone, User } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"

import type { SignUpFormValues } from "../schemas/sign-up.schema"

import { useSignUp } from "../hooks/use-sign-up"
import { signUpSchema } from "../schemas/sign-up.schema"
import { AuthInput } from "./AuthInput"
import { PasswordInput } from "./PasswordInput"

export default function SignUpForm() {
  const { onSubmit, isRedirecting } = useSignUp()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: valibotResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    },
    mode: "onTouched",
  })

  const isFormDisabled = isSubmitting || isRedirecting

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-extrabold">ثبت‌نام</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
        noValidate
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <AuthInput
            label="نام"
            placeholder="علی"
            icon={User}
            autoComplete="given-name"
            error={errors.firstName?.message}
            disabled={isFormDisabled}
            {...register("firstName")}
          />
          <AuthInput
            label="نام خانوادگی"
            placeholder="رضایی"
            autoComplete="family-name"
            error={errors.lastName?.message}
            disabled={isFormDisabled}
            {...register("lastName")}
          />
        </div>

        <AuthInput
          label="ایمیل"
          type="email"
          placeholder="example@email.com"
          icon={Mail}
          dir="ltr"
          autoComplete="email"
          error={errors.email?.message}
          disabled={isFormDisabled}
          {...register("email")}
        />

        <AuthInput
          label="شماره موبایل"
          type="tel"
          placeholder="09123456789"
          icon={Phone}
          dir="ltr"
          autoComplete="tel"
          inputMode="numeric"
          error={errors.phone?.message}
          disabled={isFormDisabled}
          {...register("phone")}
        />

        <PasswordInput
          label="رمز عبور"
          placeholder="حداقل ۸ کاراکتر"
          dir="ltr"
          autoComplete="new-password"
          error={errors.password?.message}
          disabled={isFormDisabled}
          {...register("password")}
        />

        <button
          type="submit"
          disabled={isFormDisabled}
          className="group mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-neutral-950 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
        >
          {isSubmitting || isRedirecting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              در حال ساخت...
            </>
          ) : (
            <>
              ساخت حساب
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            </>
          )}
        </button>
      </form>

      <p className="text-center text-xs leading-6 text-neutral-400 dark:text-white/30">
        با ثبت‌نام،{" "}
        <Link
          href="/terms"
          className="font-medium text-neutral-600 underline underline-offset-2 transition-colors hover:text-neutral-950 dark:text-white/50 dark:hover:text-white"
        >
          شرایط و قوانین
        </Link>{" "}
        واچلند را می‌پذیرم.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="text-[10px] tracking-wider text-neutral-400 uppercase dark:text-white/30">
            یا
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <p className="text-center text-sm text-neutral-500 dark:text-white/50">
          حساب کاربری دارید؟{" "}
          <Link
            href="/sign-in"
            className="font-medium text-neutral-950 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-white/70"
          >
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  )
}
