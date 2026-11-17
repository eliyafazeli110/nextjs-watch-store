import "./globals.css"
import type { Metadata } from "next"

import localFont from "next/font/local"

import { Providers } from "@/components/shared/Providers"

export const metadata: Metadata = {
  title: {
    default: "واچ‌لند | فروشگاه آنلاین ساعت",
    template: "%s | واچ‌لند",
  },
  description:
    "فروشگاه اینترنتی ساعت‌های لوکس و کلاسیک با بهترین کیفیت و قیمت. خرید ساعت مردانه، زنانه و اسپرت با ارسال سریع.",
  keywords: [
    "ساعت",
    "خرید ساعت",
    "ساعت لوکس",
    "واچ لند",
    "فروشگاه ساعت",
    "watch store",
  ],
  authors: [{ name: "ایلیا فاضلی" }],
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://nextjs-watch-store-brown.vercel.app",
    siteName: "واچ‌لند",
    title: "واچ‌لند | فروشگاه آنلاین ساعت",
    description:
      "فروشگاه اینترنتی ساعت‌های لوکس و کلاسیک با بهترین کیفیت و قیمت.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "واچ‌لند | فروشگاه آنلاین ساعت",
      },
    ],
  },
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
