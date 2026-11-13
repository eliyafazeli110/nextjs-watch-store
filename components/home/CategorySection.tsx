import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: 1,
    title: "ساعت‌های مردانه",
    subtitle: "Men's Watches",
    image: "/images/categories/man-category.png",
    href: "/products?category=men",
  },
  {
    id: 2,
    title: "ساعت‌های زنانه",
    subtitle: "Women's Watches",
    image: "/images/categories/women-category.png",
    href: "/products?category=women",
  },
  {
    id: 3,
    title: "ساعت‌های کلاسیک",
    subtitle: "Classic Watches",
    image: "/images/categories/classic-category.png",
    href: "/products?category=classic",
  },
  {
    id: 4,
    title: "ساعت‌های اسپرت",
    subtitle: "Sport Watches",
    image: "/images/categories/sport-category.png",
    href: "/products?category=sport",
  },
]

export default function CategorySection() {
  return (
    <section className="w-full bg-neutral-50 py-20 lg:py-24 dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl ">
        <h2 className="pb-6 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl dark:text-white">
          دسته بندی ها
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-neutral-200 transition-all duration-500 hover:border-neutral-300 hover:shadow-2xl hover:shadow-neutral-900/10 dark:border-white/10 dark:hover:border-white/25 dark:hover:shadow-black/50"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/80 group-hover:via-black/40 dark:from-black/80 dark:via-black/30 dark:group-hover:from-black/90 dark:group-hover:via-black/40" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-right sm:p-8">
                <h3 className="text-xl font-medium text-white sm:text-2xl">
                  {category.title}
                </h3>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/80 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                  مشاهده مجموعه
                  <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </span>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/0 transition-all duration-500 ring-inset group-hover:ring-white/20" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
