export function CheckoutSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px] animate-pulse">
      <div className="flex flex-col gap-6">
        <div className="h-64 rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-48 rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
      </div>

      <div className="h-96 rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
    </div>
  )
}
