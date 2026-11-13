export function ProductCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white animate-pulse dark:border-neutral-800 dark:bg-neutral-950">
      <div className="aspect-4/5 w-full bg-neutral-200 dark:bg-neutral-800" />

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="h-4 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />

        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="h-5 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="size-9 rounded-full bg-neutral-200 dark:bg-neutral-800" />
        </div>
      </div>
    </div>
  )
}
