import { LogOut } from "lucide-react"

import { requireAuth } from "@/lib/dal"

import { userNavItems } from "../data/nav-items"
import { UserNavLink } from "./UserNavLink"

export async function UserSidebar() {
  const session = await requireAuth()

  const user = session.user
  const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ")

  return (
    <aside className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-5 text-center dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex size-16 items-center justify-center rounded-full bg-neutral-950 text-xl font-bold text-white dark:bg-white dark:text-neutral-950">
          {(user.firstName?.[0] ?? user.email[0]).toUpperCase()}
        </div>

        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-semibold text-neutral-950 dark:text-white">
            {fullName}
          </p>
          <p className="text-xs text-neutral-500 dark:text-white/50" dir="ltr">
            {user.email}z
          </p>
        </div>
      </div>

      <nav className="flex flex-col gap-1 rounded-2xl border border-neutral-200 bg-white p-2 dark:border-neutral-800 dark:bg-neutral-950">
        {userNavItems.map((item) => (
          <UserNavLink key={item.href} {...item} />
        ))}
      </nav>

      <form>
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm font-medium text-neutral-600 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white/60 dark:hover:border-red-950 dark:hover:bg-red-950/30 dark:hover:text-red-400"
        >
          <LogOut className="size-4.5" />
          خروج از حساب
        </button>
      </form>
    </aside>
  )
}
