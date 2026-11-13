import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

import { Logo } from "@/components/shared/Logo"
import { CartBadge } from "@/features/cart/components/CartBadge"
import { CartBadgeView } from "@/features/cart/components/CartBadgeView"
import { SearchBar } from "@/features/search/components/SearchBar"
import { SearchModal } from "@/features/search/components/SearchModal"
import { cn } from "@/lib/utils"

import { AuthSection } from "./AuthSection"
import HeaderNav from "./HeaderNav"
import { ThemeToggle } from "./ThemeToggle"

const ghostButtonClassName = cn(
  "flex size-9 items-center justify-center rounded-full select-none",
  "text-neutral-500 transition-all duration-200",
  "hover:bg-neutral-100 hover:text-neutral-950",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950",
  "dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white",
  "dark:focus-visible:outline-white",
)

const outlineButtonClassName = cn(
  "flex size-9 items-center justify-center rounded-full select-none",
  "border border-neutral-200 text-neutral-700",
  "transition-all duration-200",
  "hover:border-neutral-950 hover:bg-neutral-950 hover:text-white",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950",
  "dark:border-neutral-800 dark:text-neutral-300",
  "dark:hover:border-white dark:hover:bg-white dark:hover:text-neutral-950",
  "dark:focus-visible:outline-white",
)

const primaryButtonClassName = cn(
  "flex h-9 items-center justify-center gap-2 rounded-full select-none",
  "bg-neutral-950 px-4 text-sm font-medium text-white",
  "transition-all duration-200",
  "hover:bg-neutral-800 active:scale-95",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950",
  "dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200",
  "dark:focus-visible:outline-white",
)

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/80 bg-white/95 shadow-sm backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/80 dark:shadow-none">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Logo />
          <HeaderNav />
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <ThemeToggle className={cn(ghostButtonClassName, "hidden md:flex")} />

          <div className="mx-1 hidden h-5 w-px bg-neutral-200 md:block dark:bg-neutral-800" />

          <div className="hidden md:block">
            <SearchModal buttonClassName={ghostButtonClassName} />
          </div>

          <Link
            href="/cart"
            className={cn(outlineButtonClassName, "relative")}
            aria-label="سبد خرید"
            prefetch={false}
          >
            <ShoppingCart className="size-4.5" />
            <Suspense fallback={<CartBadgeView serverCount={0} />}>
              <CartBadge />
            </Suspense>
          </Link>

          <AuthSection primaryClassName={primaryButtonClassName} />
        </div>
      </div>
      <div className="border-t border-neutral-100 px-4 py-3 md:hidden dark:border-neutral-800/50">
        <SearchBar />
      </div>
    </header>
  )
}
