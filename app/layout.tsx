import "./globals.css"
import type { Metadata } from "next"

import localFont from "next/font/local"

import { Providers } from "@/components/shared/Providers"

export const metadata: Metadata = {
  title: "Nextjs-watch-store",
  description: "A watch e-commerce project built with Next.js",
}

const vazirFont = localFont({
  src: "../public/fonts/Vazirmatn-Regular.woff2",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={`${vazirFont.className} antialiased overflow-x-hidden`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
