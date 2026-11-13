import Image from "next/image"
import Link from "next/link"

import type { Article } from "../types"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group h-full">
      <Link href={`/articles/${article.slug}`} className="block h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-2xl hover:shadow-neutral-900/10 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 dark:hover:shadow-black/50">
          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <div className="bg-linear-0-to-t absolute inset-0 from-black/30 via-transparent to-transparent transition-opacity duration-500 dark:from-black/50" />

            <div className="absolute top-3 right-3">
              <span className="inline-block rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-medium tracking-[0.15em] text-white/90 backdrop-blur-sm">
                {article.category}
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="flex items-center gap-2 text-[11px] text-neutral-500 dark:text-white/40">
              <span>{article.readTime} دقیقه مطالعه</span>
            </div>

            <h3 className="line-clamp-2 min-h-16 text-right text-lg leading-8 font-medium text-neutral-950 dark:text-white">
              {article.title}
            </h3>
          </div>
        </div>
      </Link>
    </article>
  )
}
