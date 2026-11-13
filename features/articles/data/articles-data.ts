import type { Article } from "../types"

import { articleContents } from "./article-contents"

export const articles: Article[] = [
  {
    slug: "how-to-choose-a-watch",
    title: "چگونه ساعت مناسب خود را انتخاب کنیم؟",
    excerpt:
      "راهنمایی برای انتخاب ساعت مناسب بر اساس استایل، کاربرد، اندازه مچ و سبک زندگی.",
    category: "راهنمای خرید",
    image: "/images/blogs/types-article.png",
    readTime: 6,
    content: articleContents["how-to-choose-a-watch"],
    author: "تیم واچلند",
    publishedAt: "۱۴۰۴/۰۷/۰۱",
    tags: ["راهنمای خرید", "انتخاب ساعت", "ساعت مناسب"],
  },
  {
    slug: "automatic-vs-quartz",
    title: "Automatic یا Quartz؛ کدام برای شما مناسب‌تر است؟",
    excerpt:
      "با تفاوت‌های اصلی دو مکانیزم محبوب ساعت آشنا شوید و انتخاب آگاهانه‌تری داشته باشید.",
    category: "دانش ساعت",
    image: "/images/blogs/quartz-or-automatic-article.png",
    readTime: 5,
    content: articleContents["automatic-vs-quartz"],
    author: "تیم واچلند",
    publishedAt: "۱۴۰۴/۰۶/۲۸",
    tags: ["اتوماتیک", "کوارتز", "مکانیزم ساعت"],
  },
  {
    slug: "watch-care-guide",
    title: "چگونه از ساعت خود مراقبت کنیم؟",
    excerpt: "چند نکته ساده برای افزایش عمر ساعت و حفظ ظاهر و عملکرد آن.",
    category: "نگهداری",
    image: "/images/blogs/clean-watch-article.png",
    readTime: 4,
    content: articleContents["watch-care-guide"],
    author: "تیم واچلند",
    publishedAt: "۱۴۰۴/۰۶/۲۵",
    tags: ["نگهداری", "مراقبت از ساعت", "تمیز کردن"],
  },
  {
    slug: "watch-size-guide",
    title: "راهنمای انتخاب اندازه مناسب ساعت",
    excerpt: "چگونه بر اساس اندازه مچ دست، قطر قاب مناسب ساعت را انتخاب کنیم؟",
    category: "راهنمای خرید",
    image: "/images/blogs/size-watch-article.png",
    readTime: 5,
    content: articleContents["watch-size-guide"],
    author: "تیم واچلند",
    publishedAt: "۱۴۰۴/۰۶/۲۰",
    tags: ["اندازه ساعت", "راهنمای خرید", "قطر قاب"],
  },
]

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function getRelatedArticles(currentSlug: string, limit = 3) {
  return articles.filter((a) => a.slug !== currentSlug).slice(0, limit)
}
