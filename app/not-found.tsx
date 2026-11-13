import { Button } from "@base-ui/react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export default function NorFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center dark:bg-black">
      <p className="text-[120px] font-bold leading-none tracking-tighter text-neutral-950 sm:text-[160px] dark:text-white">
        404
      </p>

      <div className="my-6 h-px w-16 bg-neutral-300 dark:bg-neutral-700" />

      <h1 className="text-xl font-medium text-neutral-950 sm:text-2xl dark:text-white">
        صفحه مورد نظر پیدا نشد
      </h1>

      <Button>
        <Link
          href="/"
          className={cn(
            "mt-8 inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium no-underline transition-colors",
            "bg-neutral-950 text-white hover:bg-neutral-800",
            "dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:focus-visible:outline-white",
          )}
        >
          بازگشت به صفحه اصلی
        </Link>
      </Button>
    </main>
  )
}
