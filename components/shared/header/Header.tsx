"use client"

import { Button } from "@base-ui/react"
import { ShoppingCart, User, UserRound } from "lucide-react"
import Link from "next/link"

import { Logo } from "../Logo"
import HeaderNav from "./HeaderNav"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const user = true

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-1 px-4 sm:gap-2 sm:px-6 md:gap-3 lg:gap-4 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <Logo />

          <HeaderNav />
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-1 md:gap-2">
          <ThemeToggle />

          <Button>
            <Link href="/cart">
              <ShoppingCart />
            </Link>
          </Button>

          {user ? (
            <User />
          ) : (
            <Link href="/register">
              <UserRound className="size-4.5" />
              <span className="hidden lg:inline">ورود</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
