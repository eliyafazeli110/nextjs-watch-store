function CartItemCardSkeleton() {
  return (
    <div className="flex animate-pulse gap-4 rounded-2xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="size-24 shrink-0 rounded-xl bg-neutral-200 dark:bg-neutral-800" />

      <div className="flex flex-1 flex-col justify-between py-1">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-2">
            <div className="h-4 w-40 rounded bg-neutral-200 dark:bg-neutral-800 sm:w-64" />
            <div className="h-4 w-20 rounded bg-neutral-200 dark:bg-neutral-800 sm:hidden" />
          </div>
          <div className="size-8 rounded-full bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="h-8 w-24 rounded-full bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex flex-col items-end gap-1.5">
            <div className="h-5 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-3 w-16 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function CartPageSkeleton() {
  return (
    <div className="mx-auto w-full max-w-7xl animate-pulse">
      <div className="flex items-center justify-between py-4 sm:py-6">
        <div className="h-7 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-8 w-24 rounded-full bg-neutral-200 dark:bg-neutral-800" />
      </div>

      <div className="grid gap-6 pb-10 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-8">
        <div className="flex flex-col gap-3 sm:gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <CartItemCardSkeleton key={i} />
          ))}
        </div>

        <div className="w-full lg:sticky lg:top-24">
          <div className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="h-5 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="mt-2 flex items-center justify-between">
              <div className="h-4 w-16 rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-4 w-12 rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <div className="my-2 h-px w-full bg-neutral-200 dark:bg-neutral-800" />
            <div className="flex items-center justify-between">
              <div className="h-5 w-16 rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-6 w-28 rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <div className="mt-4 h-12 w-full rounded-full bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </div>
      </div>
    </div>
  )
}
