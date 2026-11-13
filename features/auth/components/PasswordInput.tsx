"use client"

import type { ComponentPropsWithRef } from "react"

import { Eye, EyeOff, Lock } from "lucide-react"
import { useState } from "react"

import { AuthInput } from "./AuthInput"

interface PasswordInputProps extends ComponentPropsWithRef<"input"> {
  label?: string
  error?: string
}

export function PasswordInput({
  label,
  error,
  ref,
  value,
  onChange,
  ...props
}: PasswordInputProps) {
  const [show, setShow] = useState(false)
  const [internalValue, setInternalValue] = useState("")

  const currentValue = value ?? internalValue
  const hasValue = Boolean(currentValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value)
    onChange?.(e)
  }

  return (
    <AuthInput
      ref={ref}
      label={label}
      icon={Lock}
      type={show ? "text" : "password"}
      error={error}
      value={value}
      onChange={handleChange}
      leftSlot={
        hasValue ? (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "مخفی کردن رمز" : "نمایش رمز"}
            className="flex size-7 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:text-white/40 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        ) : null
      }
      {...props}
    />
  )
}
