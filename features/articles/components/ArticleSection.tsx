import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { articles } from "../data/articles-data"
import { ArticleGrid } from "./ArticleGrid"
import { FeaturedArticle } from "./FeaturedArticle"

export function ArticleSection() {
  const [featuredArticle, ...otherArticles] = articles

  return (
    <section className="w-full bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl py-20">
        <div className="pb-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl dark:text-white">
            مقالات
          </h2>

          <Link href="/articles" className="group flex flex-col gap-2">
            <span className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-all duration-300 group-hover:gap-3 group-hover:text-neutral-950 dark:text-white/50 dark:group-hover:text-white">
              مشاهده همه
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </span>

            <span className="h-px w-[50%] bg-neutral-300 transition-all duration-500 group-hover:w-full group-hover:bg-neutral-950 dark:bg-white/20 dark:group-hover:bg-white" />
          </Link>
        </div>

        <FeaturedArticle article={featuredArticle} />

        <ArticleGrid articles={otherArticles.slice(0, 3)} />
      </div>
    </section>
  )
}
