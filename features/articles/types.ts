export interface ListItem {
  title?: string
  content: string
  isNegative?: boolean
}

export type ArticleSection =
  | {
      type: "callout"
      variant: "info" | "success" | "warning"
      content: string
    }
  | { type: "heading"; level: 2 | 3; content: string }
  | { type: "list"; items: ListItem[]; ordered?: boolean }
  | { type: "paragraph"; content: string }
  | { type: "table"; headers: string[]; rows: string[][] }
export interface ArticleContent {
  sections: ArticleSection[]
}

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  readTime: number
  content?: ArticleContent
  author?: string
  publishedAt?: string
  tags?: string[]
}
