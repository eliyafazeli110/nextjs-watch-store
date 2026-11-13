import * as v from "valibot"

export const signinSchema = v.object({
  email: v.pipe(
    v.string(),
    v.trim(),
    v.toLowerCase(),
    v.nonEmpty("ایمیل را وارد کنید"),
    v.email("فرمت ایمیل صحیح نیست"),
  ),
  password: v.pipe(v.string(), v.nonEmpty("رمز عبور را وارد کنید")),
})

export type SigninForm = v.InferInput<typeof signinSchema>
