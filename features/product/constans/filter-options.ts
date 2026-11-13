export interface FilterOptionItem {
  slug: string
  name: string
}

export const BRANDS: FilterOptionItem[] = [
  { slug: "seiko", name: "سیکو (Seiko)" },
  { slug: "casio", name: "کاسیو (Casio)" },
  { slug: "citizen", name: "سیتیزن (Citizen)" },
  { slug: "tissot", name: "تیسو (Tissot)" },
  { slug: "orient", name: "اورینت (Orient)" },
]

export const CATEGORIES: FilterOptionItem[] = [
  { slug: "men", name: "ساعت مردانه" },
  { slug: "women", name: "ساعت زنانه" },
  { slug: "sport", name: "ساعت اسپرت" },
  { slug: "classic", name: "ساعت کلاسیک" },
]
