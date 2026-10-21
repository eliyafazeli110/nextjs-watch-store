import "./globals.css"
import type { Metadata } from "next"

import { ThemeProvider } from "next-themes"
import localFont from "next/font/local"

export const metadata: Metadata = {
  title: "Nextjs-watch-store",
  description: "A watch e-commerce project built with Next.js",
}

const vazirFont = localFont({
  src: "../public/fonts/Vazirmatn-Regular.woff2",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirFont.className} antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
