"use client"

import dynamic from "next/dynamic"

const BrandsStrip = dynamic(
  () => import("./BrandsStrip").then((mod) => mod.BrandsStrip),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto flex max-w-7xl items-center justify-around gap-8 opacity-40 animate-pulse">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-6 w-20 rounded-md bg-neutral-200 dark:bg-neutral-800"
          />
        ))}
      </div>
    ),
  },
)

export function BrandsStripWrapper() {
  return <BrandsStrip />
}
