"use client"

import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"

import { ConfirmDialog } from "@/components/ui/ConfirmDialog"
import { authClient } from "@/lib/auth-client"
import { toastManager } from "@/lib/utils"

interface LogoutButtonProps {
  className?: string
  showLabel?: boolean
}

export function LogoutButton({
  className,
  showLabel = true,
}: LogoutButtonProps) {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleConfirm = () => {
    startTransition(async () => {
      try {
        await authClient.signOut()

        router.push("/")
        router.refresh()
      } catch {
        toastManager.add({
          title: "خروج با خطا مواجه شد",
          type: "error",
        })
        setOpen(false)
      }
    })
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        disabled={isPending}
        role="menuitem"
        className={className}
      >
        <LogOut className="size-4" />
        {showLabel && <span>خروج از حساب</span>}
      </button>

      <ConfirmDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirm}
        isLoading={isPending}
        title="خروج از حساب کاربری"
        description="آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟"
        confirmLabel="بله، خارج شو"
        cancelLabel="انصراف"
        variant="danger"
      />
    </>
  )
}
