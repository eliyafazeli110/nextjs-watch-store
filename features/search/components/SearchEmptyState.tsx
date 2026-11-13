import { SearchX } from "lucide-react"

export default function SearchEmptyState({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center gap-3 p-6 text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 dark:bg-neutral-900 dark:text-neutral-600">
        <SearchX className="size-5" />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-neutral-950 dark:text-white">
          نتیجه‌ای پیدا نشد
        </p>
        <p className="text-xs text-neutral-500 dark:text-white/40">
          برای «{query}» محصولی پیدا نشد
        </p>
      </div>
    </div>
  )
}
