"use client"

import type { FieldErrors, UseFormRegister } from "react-hook-form"

import { MapPin, Phone, User } from "lucide-react"

import { AuthInput } from "@/features/auth/components/AuthInput"

import type { CheckoutInput } from "../schemas/checkout.schema"

interface ShippingFormProps {
  register: UseFormRegister<CheckoutInput>
  errors: FieldErrors<CheckoutInput>
}

export function ShippingForm({ register, errors }: ShippingFormProps) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex size-8 items-center justify-center rounded-full bg-neutral-100 text-xs font-bold text-neutral-950 dark:bg-neutral-900 dark:text-white">
          ۱
        </span>
        <h2 className="text-base font-semibold text-neutral-950 dark:text-white">
          اطلاعات گیرنده
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <AuthInput
          label="نام"
          placeholder="علی"
          icon={User}
          error={errors.firstName?.message}
          {...register("firstName")}
        />

        <AuthInput
          label="نام خانوادگی"
          placeholder="رضایی"
          error={errors.lastName?.message}
          {...register("lastName")}
        />

        <AuthInput
          label="شماره موبایل"
          type="tel"
          placeholder="09123456789"
          icon={Phone}
          dir="ltr"
          error={errors.phone?.message}
          {...register("phone")}
        />

        <AuthInput
          label="استان"
          placeholder="تهران"
          icon={MapPin}
          error={errors.province?.message}
          {...register("province")}
        />

        <AuthInput
          label="شهر"
          placeholder="تهران"
          error={errors.city?.message}
          {...register("city")}
        />

        <AuthInput
          label="کد پستی"
          placeholder="1234567890"
          dir="ltr"
          error={errors.postalCode?.message}
          {...register("postalCode")}
        />

        <div className="sm:col-span-2">
          <AuthInput
            label="آدرس کامل"
            placeholder="خیابان، کوچه، پلاک، واحد"
            error={errors.address?.message}
            {...register("address")}
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label
            htmlFor="note"
            className="text-xs font-medium text-neutral-700 dark:text-white/70"
          >
            توضیحات سفارش{" "}
            <span className="text-neutral-400 dark:text-white/40">
              (اختیاری)
            </span>
          </label>

          <textarea
            id="note"
            rows={3}
            placeholder="مثلاً: لطفاً قبل از ارسال تماس بگیرید"
            className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-950 transition-all duration-200 outline-none placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-2 focus:ring-neutral-950/10 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:placeholder:text-white/30 dark:focus:border-white dark:focus:ring-white/10"
            {...register("note")}
          />
        </div>
      </div>
    </section>
  )
}
