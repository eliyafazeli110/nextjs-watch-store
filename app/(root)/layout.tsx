import React from "react"

import Footer from "@/components/Footer"
import Header from "@/components/shared/header/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <main className="mx-auto w-full pt-16 max-w-7xl items-center justify-between p-5 px-10 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
