import { ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function EmptyCart() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] w-full flex-col items-center justify-center px-4 py-12 sm:px-6">
      <div className="flex w-full max-w-md flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-200 bg-white p-8 text-center shadow-sm sm:p-12 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex size-20 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 dark:bg-neutral-900 dark:text-neutral-500">
          <ShoppingBag className="size-8" strokeWidth={1.5} />
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <h2 className="text-lg font-bold text-neutral-950 dark:text-white">
            سبد خرید شما خالی است
          </h2>
          <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">
            هنوز هیچ محصولی به سبد خرید اضافه نکرده‌اید. برای شروع خرید،
            می‌توانید محصولات ما را مشاهده کنید.
          </p>
        </div>

        <Link
          href="/products"
          className="mt-8 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-neutral-950 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 active:scale-[0.98] dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
        >
          مشاهده محصولات
        </Link>
      </div>
    </div>
  )
}
