export function UserSidebarSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-40 animate-pulse rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
      <div className="flex flex-col gap-0.5">
        <div className="h-10 animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-10 animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />
      </div>
      <div>
        <div className="h-10 animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />
      </div>
    </div>
  )
}
