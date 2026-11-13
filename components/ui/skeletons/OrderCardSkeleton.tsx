export function OrderCardSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-4 animate-pulse sm:flex-row sm:items-center sm:justify-between dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex flex-col gap-1">
              <div className="h-3 w-16 rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-4 w-20 rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>

            <div className="flex flex-col gap-1">
              <div className="h-3 w-12 rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>

            <div className="flex flex-col gap-1">
              <div className="h-3 w-10 rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-4 w-14 rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <div className="h-6 w-20 rounded-full bg-neutral-200 dark:bg-neutral-800" />

            <div className="flex items-end gap-1">
              <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>

            <div className="size-4 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </div>
      ))}
    </div>
  )
}
