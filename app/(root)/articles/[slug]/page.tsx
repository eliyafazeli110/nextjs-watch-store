import { Suspense } from "react"

import { ArticlePageSkeleton } from "@/components/ui/skeletons/ArticlePageSkeleton"
import { ArticleDetails } from "@/features/articles/components/ArticleDetails"
import { getArticleBySlug } from "@/features/articles/data/articles-data"
import { Metadata } from "next"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) return { title: "مقاله پیدا نشد" }

  const description =
    article.excerpt || `مطالعه مقاله ${article.title} در مجله واچ‌لند.`

  return {
    title: article.title,
    description: description,
    openGraph: {
      title: article.title,
      description: description,
      images: article.image ? [article.image] : [],
    },
  }
}

async function ArticleLoader({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) return null

  return <ArticleDetails slug={slug} />
}

export default function ArticlePage({ params }: ArticlePageProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Suspense fallback={<ArticlePageSkeleton />}>
        <ArticleLoader params={params} />
      </Suspense>
    </div>
  )
}
