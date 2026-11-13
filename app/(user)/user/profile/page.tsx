import { Suspense } from "react"

import { ProfileFormSkeleton } from "@/components/ui/skeletons/ProfileFormSkeleton"
import { ProfileForm } from "@/features/profile/ProfileForm"
import { requireAuth } from "@/lib/dal"

async function ProfileContent() {
  const session = await requireAuth()

  return <ProfileForm user={session.user} />
}

export default function ProfilePage() {
  return (
    <Suspense fallback={<ProfileFormSkeleton />}>
      <ProfileContent />
    </Suspense>
  )
}
