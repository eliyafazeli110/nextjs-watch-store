export function ArticlePageSkeleton() {
  return (
    <div className="mx-auto flex max-w-2xl animate-pulse flex-col gap-10">
      <div className="flex flex-col gap-4">
        <div className="h-4 w-32 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-10 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-1/2 rounded bg-neutral-200 dark:bg-neutral-800" />
      </div>
      <div className="aspect-video w-full rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
    </div>
  )
}
