"use client"

import { Package, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

interface UserNavLinkProps {
  href: string
  label: string
  iconName: "orders" | "user"
}

const iconMap = {
  user: User,
  orders: Package,
}

export function UserNavLink({ href, label, iconName }: UserNavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  const Icon = iconMap[iconName]

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
        isActive
          ? "bg-neutral-100 text-neutral-950 dark:bg-neutral-800 dark:text-white"
          : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white",
      )}
    >
      <Icon className="size-4.5" />
      {label}
    </Link>
  )
}
