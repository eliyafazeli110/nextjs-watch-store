"use client"

import { Toast } from "@base-ui/react"
import { AppProgressProvider as ProgressProvider } from "@bprogress/next"
import { ThemeProvider } from "next-themes"

import { Toaster } from "@/components/ui/Toaster"
import { CartProvider } from "@/features/cart/context/CartProvider"
import { toastManager } from "@/lib/utils"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ProgressProvider
        height="4px"
        color="var(--progress-color)"
        options={{ showSpinner: false, direction: "rtl" }}
        shallowRouting
      >
        <Toast.Provider toastManager={toastManager}>
          <CartProvider>
            <Toaster />
            {children}
          </CartProvider>
        </Toast.Provider>
      </ProgressProvider>
    </ThemeProvider>
  )
}
