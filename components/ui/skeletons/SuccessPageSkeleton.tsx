export function SuccessPageSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-lg animate-pulse flex-col items-center text-center">
      <div className="size-20 rounded-full bg-neutral-200 dark:bg-neutral-800" />
      <div className="mt-8 h-8 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />
      <div className="mt-3 h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
      <div className="mt-8 h-20 w-full rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
      <div className="mt-8 flex w-full gap-3">
        <div className="h-11 flex-1 rounded-full bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-11 flex-1 rounded-full bg-neutral-200 dark:bg-neutral-800" />
      </div>
    </div>
  )
}
