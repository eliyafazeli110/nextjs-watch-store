import { Calendar, Clock } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"

import { ArticleContent } from "@/features/articles/components/ArticleContent"
import { getArticleBySlug } from "@/features/articles/data/articles-data"

export function ArticleDetails({ slug }: { slug: string }) {
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  return (
    <article className="mx-auto flex max-w-2xl flex-col gap-10">
      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-neutral-400 dark:text-white/30">
          <span className="font-medium text-neutral-950 dark:text-white">
            {article.category}
          </span>
          <span className="size-0.5 rounded-full bg-neutral-300 dark:bg-white/20" />
          <span className="flex items-center gap-1">
            <Clock className="size-3" />
            {article.readTime} دقیقه
          </span>
          {article.publishedAt && (
            <>
              <span className="size-0.5 rounded-full bg-neutral-300 dark:bg-white/20" />
              <span className="flex items-center gap-1">
                <Calendar className="size-3" />
                {article.publishedAt}
              </span>
            </>
          )}
        </div>
        <h1 className="text-3xl leading-[1.3] font-bold tracking-tight text-neutral-950 sm:text-4xl dark:text-white">
          {article.title}
        </h1>
        <p className="text-sm leading-7 text-neutral-500 dark:text-white/50">
          {article.excerpt}
        </p>
      </header>

      <div className="relative aspect-16/9 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 672px"
        />
      </div>

      {article.content && (
        <ArticleContent sections={article.content.sections} />
      )}

      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] text-neutral-600 dark:bg-neutral-900 dark:text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}
