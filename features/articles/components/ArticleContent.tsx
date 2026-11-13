import { AlertTriangle, CheckCircle2, Info } from "lucide-react"

import type { ArticleSection, ListItem } from "../types"

interface ArticleContentProps {
  sections: ArticleSection[]
}

export function ArticleContent({ sections }: ArticleContentProps) {
  return (
    <div className="flex flex-col gap-6">
      {sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </div>
  )
}

function Section({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case "paragraph":
      return <Paragraph content={section.content} />

    case "heading":
      return <Heading level={section.level} content={section.content} />

    case "list":
      return <List items={section.items} ordered={section.ordered} />

    case "callout":
      return <Callout variant={section.variant} content={section.content} />

    case "table":
      return <Table headers={section.headers} rows={section.rows} />

    default:
      return null
  }
}

function Paragraph({ content }: { content: string }) {
  return (
    <p className="text-base leading-8 text-neutral-600 dark:text-white/60">
      {content}
    </p>
  )
}

function Heading({ level, content }: { level: 2 | 3; content: string }) {
  if (level === 2) {
    return (
      <h2 className="relative mt-4 mb-2 flex items-center gap-3 text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl dark:text-white">
        <span className="h-6 w-1 shrink-0 rounded-full bg-neutral-950 dark:bg-white" />
        {content}
      </h2>
    )
  }

  return (
    <h3 className="mt-3 text-lg font-semibold tracking-tight text-neutral-950 dark:text-white">
      {content}
    </h3>
  )
}

function List({ items, ordered }: { items: ListItem[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul"

  return (
    <Tag className="flex flex-col gap-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50/50 p-3 text-sm leading-7 text-neutral-600 dark:border-neutral-900 dark:bg-neutral-900/30 dark:text-white/60"
        >
          {item.isNegative ? (
            <span className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-600 dark:bg-red-950/50 dark:text-red-400">
              ✕
            </span>
          ) : ordered ? (
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-[10px] font-bold text-white dark:bg-white dark:text-neutral-950">
              {(index + 1).toLocaleString("fa-IR")}
            </span>
          ) : (
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-white/30" />
          )}

          <span className="flex-1">
            {item.title && (
              <strong className="font-semibold text-neutral-950 dark:text-white">
                {item.title}{" "}
              </strong>
            )}
            {item.content}
          </span>
        </li>
      ))}
    </Tag>
  )
}

function Callout({
  variant,
  content,
}: {
  variant: "info" | "success" | "warning"
  content: string
}) {
  const config = {
    info: {
      icon: Info,
      iconClass: "text-blue-600 dark:text-blue-400",
      bgClass: "bg-blue-50 dark:bg-blue-950/20",
      borderClass: "border-blue-200 dark:border-blue-950",
    },
    warning: {
      icon: AlertTriangle,
      iconClass: "text-amber-600 dark:text-amber-400",
      bgClass: "bg-amber-50 dark:bg-amber-950/20",
      borderClass: "border-amber-200 dark:border-amber-950",
    },
    success: {
      icon: CheckCircle2,
      iconClass: "text-emerald-600 dark:text-emerald-400",
      bgClass: "bg-emerald-50 dark:bg-emerald-950/20",
      borderClass: "border-emerald-200 dark:border-emerald-950",
    },
  }[variant]

  const Icon = config.icon

  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border p-4 ${config.bgClass} ${config.borderClass} `}
    >
      <Icon className={`mt-0.5 size-4.5 shrink-0 ${config.iconClass}`} />
      <p className="text-sm leading-7 text-neutral-700 dark:text-white/70">
        {content}
      </p>
    </div>
  )
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
      <table className="w-full border-collapse text-right text-sm">
        <thead className="bg-neutral-50 dark:bg-neutral-900/50">
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="border-b border-neutral-200 px-4 py-3 text-xs font-semibold text-neutral-950 dark:border-neutral-800 dark:text-white"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-neutral-100 last:border-0 dark:border-neutral-900"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-xs leading-6 text-neutral-600 dark:text-white/60"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
