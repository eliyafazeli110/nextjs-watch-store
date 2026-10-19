import "./globals.css"
import { Metadata } from "next"
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
    <html lang="fa">
      <body className={`${vazirFont.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
