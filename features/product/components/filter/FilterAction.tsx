import { Loader2 } from "lucide-react"

interface FilterActionsProps {
  isPending: boolean
  onApply: () => void
  onClear: () => void
}

export function FilterActions({
  isPending,
  onApply,
  onClear,
}: FilterActionsProps) {
  return (
    <div className="flex flex-col gap-2 border-t border-neutral-200 pt-4 dark:border-neutral-800">
      <button
        type="button"
        onClick={onApply}
        disabled={isPending}
        className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-950 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-50 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
      >
        {isPending && <Loader2 className="size-4 animate-spin" />}
        اعمال فیلتر
      </button>
      <button
        type="button"
        onClick={onClear}
        disabled={isPending}
        className="flex h-10 w-full items-center justify-center rounded-md text-sm font-medium text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950 disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
      >
        حذف همه فیلترها
      </button>
    </div>
  )
}
