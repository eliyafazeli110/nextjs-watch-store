import { Suspense } from "react"

import { UserSidebarSkeleton } from "@/components/ui/skeletons/UserSidebarSkeleton"
import { UserSidebar } from "@/features/user/components/UserSidebar"

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        <Suspense fallback={<UserSidebarSkeleton />}>
          <UserSidebar />
        </Suspense>

        <div className="min-w-0">{children}</div>
      </div>
    </div>
  )
}
