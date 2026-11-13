import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/header/Header"
import { ScrollToTop } from "@/components/shared/ScrollToTop"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#fafafa] text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Header />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pt-(--header-height) pb-6 sm:px-6 lg:px-8">
        {children}
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  )
}
