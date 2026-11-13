import type { LucideIcon } from "lucide-react"

export interface UserNavItem {
  href: string
  label: string
  icon: LucideIcon
}

export const userNavItems = [
  { href: "/user/profile", label: "پروفایل", iconName: "user" },
  { href: "/user/orders", label: "سفارش‌ها", iconName: "orders" },
] as const
