import * as v from "valibot"

export const signUpSchema = v.pipe(
  v.object({
    firstName: v.pipe(
      v.string(),
      v.trim(),
      v.minLength(2, "نام باید حداقل ۲ کاراکتر باشد"),
      v.maxLength(50, "نام نمی‌تواند بیشتر از ۵۰ کاراکتر باشد"),
    ),
    lastName: v.pipe(
      v.string(),
      v.trim(),
      v.minLength(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد"),
      v.maxLength(50, "نام خانوادگی نمی‌تواند بیشتر از ۵۰ کاراکتر باشد"),
    ),
    email: v.pipe(
      v.string(),
      v.trim(),
      v.toLowerCase(),
      v.nonEmpty("ایمیل را وارد کنید"),
      v.email("فرمت ایمیل صحیح نیست"),
    ),
    phone: v.pipe(
      v.string(),
      v.trim(),
      v.nonEmpty("شماره موبایل را وارد کنید"),
      v.regex(/^09\d{9}$/, "شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد"),
    ),
    password: v.pipe(
      v.string(),
      v.nonEmpty("رمز عبور را وارد کنید"),
      v.minLength(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
      v.maxLength(72, "رمز عبور نمی‌تواند بیشتر از ۷۲ کاراکتر باشد"),
    ),
  }),
)

export type SignUpFormValues = v.InferInput<typeof signUpSchema>
