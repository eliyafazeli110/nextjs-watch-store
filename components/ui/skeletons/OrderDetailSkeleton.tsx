export function OrderDetailSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-6">
      <div className="h-16 w-full rounded-xl bg-neutral-200 dark:bg-neutral-800" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
        <div className="flex flex-col gap-6">
          <div className="h-48 rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="flex flex-col gap-6">
          <div className="h-64 rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-48 rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
        </div>
      </div>
    </div>
  )
}
