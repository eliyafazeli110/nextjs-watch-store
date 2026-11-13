import Header from "@/components/shared/header/Header"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-[#fafafa] dark:bg-neutral-950">
      <Header />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        {children}
      </main>
    </div>
  )
}
