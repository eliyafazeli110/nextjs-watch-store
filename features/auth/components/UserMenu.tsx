"use client"

import { ChevronDown, Package, User } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

import { LogoutButton } from "./LogoutButton"

interface UserMenuProps {
  user: {
    firstName?: string | null
    lastName?: string | null
    email: string
    name?: string | null
    image?: string | null
  }
  className?: string
}

const menuItems = [
  { href: "/user/profile", label: "پروفایل", icon: User },
  { href: "/user/orders", label: "سفارش‌ها", icon: Package },
]

export function UserMenu({ user, className }: UserMenuProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  const displayName = user.firstName ?? user.name ?? "کاربر واچلند"
  const initial = (user.firstName?.[0] ?? user.email[0]).toUpperCase()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="منوی کاربر"
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          "flex h-9 items-center gap-2 rounded-full pr-3 pl-1.5",
          "bg-neutral-950 text-white",
          "transition-all duration-200",
          "hover:bg-neutral-800",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950",
          "dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200",
          "dark:focus-visible:outline-white",
          className,
        )}
      >
        <span className="flex size-6 items-center justify-center rounded-full bg-white/15 text-[11px] font-bold dark:bg-neutral-950/15">
          {initial}
        </span>

        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {mounted && (
        <div
          role="menu"
          className={cn(
            "absolute top-full left-0 z-50 mt-2 w-60 origin-top-left",
            "rounded-2xl border border-neutral-200 bg-white p-1.5",
            "shadow-lg shadow-neutral-900/5 dark:shadow-black/40",
            "dark:border-neutral-800 dark:bg-neutral-950",
            "transition-all duration-200",
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0",
          )}
        >
          <div className="flex items-center gap-3 rounded-xl p-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">
              {initial}
            </span>

            <div className="flex min-w-0 flex-1 flex-col">
              <p className="truncate text-sm font-medium text-neutral-950 dark:text-white">
                {displayName}
              </p>
            </div>
          </div>

          <div className="mx-2 my-1 h-px bg-neutral-100 dark:bg-neutral-900" />

          <nav className="flex flex-col gap-0.5">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  <Icon className="size-4 text-neutral-400 transition-colors group-hover:text-neutral-950 dark:text-white/40 dark:group-hover:text-white" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="mx-2 my-1 h-px bg-neutral-100 dark:bg-neutral-900" />

          <LogoutButton className="group flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/30" />
        </div>
      )}
    </div>
  )
}
