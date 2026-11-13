"use client"

import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useTransition } from "react"

import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [isPending, startTransition] = useTransition()

  if (totalPages <= 1) return null

  const handlePageChange = (page: number) => {
    if (page === currentPage) return

    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    })
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="mt-12 flex items-center justify-center gap-1">
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1 || isPending}
        className="flex size-9 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-100 disabled:opacity-50 disabled:hover:bg-transparent dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800"
        aria-label="صفحه قبل"
      >
        <ChevronRight className="size-4" />
      </button>

      {pages.map((page) => {
        const isActive = currentPage === page

        return (
          <button
            type="button"
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={isPending}
            className={cn(
              "flex size-9 items-center justify-center rounded-md text-sm transition-colors hover:cursor-pointer",
              isActive
                ? "bg-neutral-950 font-bold text-white dark:bg-white dark:text-neutral-950"
                : "border border-transparent text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800",
              isPending && "opacity-70",
            )}
          >
            {isPending && isActive ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              page.toLocaleString("fa-IR")
            )}
          </button>
        )
      })}

      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isPending}
        className="flex size-9 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-100 disabled:opacity-50 disabled:hover:bg-transparent dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 hover:cursor-pointer"
        aria-label="صفحه بعد"
      >
        <ChevronLeft className="size-4" />
      </button>
    </div>
  )
}
