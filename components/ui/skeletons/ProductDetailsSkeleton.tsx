export function ProductDetailsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-3">
          <div className="aspect-4/3 w-full rounded-2xl bg-neutral-200 dark:bg-neutral-800" />

          <div className="flex gap-2 overflow-hidden pb-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="size-16 shrink-0 rounded-xl bg-neutral-200 dark:bg-neutral-800"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col text-right">
          <div className="mt-4 h-10 w-3/4 rounded-lg bg-neutral-200 dark:bg-neutral-800 sm:h-12 lg:h-14" />

          <div className="mt-8 border-y border-neutral-200 py-6 dark:border-white/10">
            <div className="h-6 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-2/3 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>

          <div className="mt-6 flex items-center gap-2">
            <div className="size-2 rounded-full bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </div>
      </div>

      <section className="border-t border-neutral-200 py-16 dark:border-white/10">
        <div>
          <div className="mt-4 h-8 w-40 rounded bg-neutral-200 dark:bg-neutral-800" />

          <div className="mt-8 grid grid-cols-1 border-t border-neutral-200 sm:grid-cols-2 dark:border-white/10">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-neutral-200 py-5 sm:px-4 dark:border-white/10"
              >
                <div className="h-4 w-20 rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
