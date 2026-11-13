import { UserRound } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

import { UserMenu } from "@/features/auth/components/UserMenu"
import { getSession } from "@/lib/dal"

async function AuthContent({ primaryClassName }: { primaryClassName: string }) {
  const session = await getSession()
  const user = session?.user

  if (!user) {
    return (
      <Link className={primaryClassName} href="/sign-up">
        <UserRound className="size-4.5" />
        <span className="hidden lg:inline">ورود</span>
      </Link>
    )
  }

  return (
    <UserMenu
      user={{ name: user.name, email: user.email, image: user.image ?? null }}
    />
  )
}

export function AuthSection({
  primaryClassName,
}: {
  primaryClassName: string
}) {
  return (
    <Suspense
      fallback={
        <div className="size-9 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-800" />
      }
    >
      <AuthContent primaryClassName={primaryClassName} />
    </Suspense>
  )
}
