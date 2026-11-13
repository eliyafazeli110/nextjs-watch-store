export function PaymentPageSkeleton() {
  return (
    <div className="animate-pulse flex flex-col gap-6">
      <div className="flex flex-col items-center gap-3">
        <div className="size-14 rounded-full bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-6 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-48 rounded bg-neutral-200 dark:bg-neutral-800" />
      </div>
      <div className="h-64 rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
    </div>
  )
}
