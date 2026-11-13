import * as v from "valibot"

export const checkoutSchema = v.object({
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
    v.regex(/^09\d{9}$/, "شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد"),
  ),

  province: v.pipe(v.string(), v.trim(), v.nonEmpty("استان را انتخاب کنید")),

  city: v.pipe(v.string(), v.trim(), v.nonEmpty("شهر را وارد کنید")),

  address: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(10, "آدرس باید حداقل ۱۰ کاراکتر باشد"),
  ),

  postalCode: v.pipe(
    v.string(),
    v.trim(),
    v.regex(/^\d{10}$/, "کد پستی باید ۱۰ رقم باشد"),
  ),

  paymentMethod: v.pipe(
    v.string(),
    v.nonEmpty("روش پرداخت را انتخاب کنید"),
    v.picklist(["online", "cod"], "روش پرداخت نامعتبر است"),
  ),

  note: v.optional(v.string()),
})

export type CheckoutInput = v.InferInput<typeof checkoutSchema>
