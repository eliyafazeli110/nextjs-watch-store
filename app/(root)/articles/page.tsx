import { ArticleCard } from "@/features/articles/components/ArticleCard"
import { articles } from "@/features/articles/data/articles-data"

export const metadata = {
  title: "مقالات | واچلند",
  description: "مقالات و راهنماهای دنیای ساعت",
}

export default function ArticlesPage() {
  return (
    <>
      <div className="mb-10 flex flex-col gap-3">
        <p className="max-w-xl text-sm leading-7 text-neutral-500 dark:text-white/50">
          راهنماها، داستان‌ها و دانستنی‌هایی از دنیای ساعت؛ برای انتخابی
          آگاهانه‌تر.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </>
  )
}
