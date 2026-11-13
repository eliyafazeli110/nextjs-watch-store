import Image from "next/image"
import Link from "next/link"

import type { Article } from "../types"

interface FeaturedArticleProps {
  article: Article
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <article className="group">
      <Link href={`/articles/${article.slug}`} className="block">
        <div
          className="grid overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-500 hover:border-neutral-300 hover:shadow-2xl hover:shadow-neutral-900/10 md:grid-cols-2 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 dark:hover:shadow-black/50"
          dir="rtl"
        >
          <div className="relative aspect-4/3 overflow-hidden md:aspect-auto md:min-h-115">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent dark:from-black/60" />

            <div className="absolute top-4 right-4">
              <span className="inline-block rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-medium tracking-[0.2em] text-white/90 uppercase backdrop-blur-sm">
                {article.category}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 p-7 text-right sm:gap-8 sm:p-10 lg:gap-10 lg:p-14">
            <div className="flex flex-col gap-5">
              <h3 className="text-3xl leading-[1.4] font-medium tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl dark:text-white">
                {article.title}
              </h3>

              <p className="max-w-lg text-sm leading-8 text-neutral-500 sm:text-base dark:text-white/50">
                {article.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 text-xs text-neutral-500 dark:text-white/40">
              <span>{article.readTime} دقیقه مطالعه</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
