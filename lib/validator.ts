import * as v from "valibot"

export const insertProductSchema = v.object({
  name: v.string(),
  slug: v.string(),
  description: v.nullable(v.string()),
  price: v.number(),
  stock: v.number(),
  brandSlug: v.string(),
  categorySlug: v.string(),
  images: v.array(v.string()),
  specifications: v.record(v.string(), v.any()),
})

export const signInFormSchema = v.object({
  email: v.pipe(
    v.string("ایمیل الزامی است"),
    v.nonEmpty("لطفا ایمیل خود را وارد کنید"),
    v.email("فرمت ایمیل وارد شده صحیح نیست"),
  ),

  password: v.pipe(
    v.string("رمز عبور الزامی است"),
    v.nonEmpty("لطفا رمز عبور خود را وارد کنید"),
    v.minLength(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
  ),
})
