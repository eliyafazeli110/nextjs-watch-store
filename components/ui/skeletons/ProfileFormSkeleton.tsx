export function ProfileFormSkeleton() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 animate-pulse dark:border-neutral-800 dark:bg-neutral-950">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="h-4 w-12 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-11 w-full rounded-xl bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="h-4 w-20 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-11 w-full rounded-xl bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="h-4 w-12 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-11 w-full rounded-xl bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-11 w-full rounded-xl bg-neutral-200 dark:bg-neutral-800" />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <div className="h-10 w-32 rounded-full bg-neutral-200 dark:bg-neutral-800" />
      </div>
    </div>
  )
}
