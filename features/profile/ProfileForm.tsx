"use client"

import { valibotResolver } from "@hookform/resolvers/valibot"
import { Mail, Phone, User } from "lucide-react"
import { useForm } from "react-hook-form"
import * as v from "valibot"

import { AuthInput } from "@/features/auth/components/AuthInput"

const profileSchema = v.object({
  firstName: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(2, "نام باید حداقل ۲ کاراکتر باشد"),
  ),
  lastName: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد"),
  ),
  phone: v.pipe(
    v.string(),
    v.trim(),
    v.regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
  ),
})

type ProfileInput = v.InferInput<typeof profileSchema>

interface ProfileFormProps {
  user: {
    email: string
    firstName?: string | null
    lastName?: string | null
    phone: string
  }
}

export function ProfileForm({ user }: ProfileFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileInput>({
    resolver: valibotResolver(profileSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: user.firstName ?? "",
      lastName: user.lastName ?? "",
      phone: user.phone,
    },
  })

  const onSubmit = (data: ProfileInput) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 dark:border-neutral-800 dark:bg-neutral-950"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <AuthInput
          label="نام"
          icon={User}
          error={errors.firstName?.message}
          {...register("firstName")}
        />

        <AuthInput
          label="نام خانوادگی"
          error={errors.lastName?.message}
          {...register("lastName")}
        />

        <AuthInput
          label="ایمیل"
          icon={Mail}
          value={user.email}
          disabled
          dir="ltr"
          className="cursor-not-allowed opacity-60"
        />

        <AuthInput
          label="شماره موبایل"
          icon={Phone}
          type="tel"
          dir="ltr"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-10 items-center justify-center rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
        >
          {isSubmitting ? "در حال ذخیره..." : "ذخیره تغییرات"}
        </button>
      </div>
    </form>
  )
}
