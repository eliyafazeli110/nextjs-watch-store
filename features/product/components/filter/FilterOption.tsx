import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

interface FilterOptionProps {
  label: string
  selected: boolean
  variant: "checkbox" | "radio"
  onToggle: () => void
}

export function FilterOption({
  label,
  selected,
  variant,
  onToggle,
}: FilterOptionProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={cn(
        "group flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
        "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        selected
          ? "font-medium text-neutral-950 dark:text-white"
          : "text-neutral-500 dark:text-neutral-400",
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          "flex size-4 items-center justify-center border transition-all",
          variant === "radio" ? "rounded-full" : "rounded",
          selected
            ? "border-neutral-950 bg-neutral-950 text-white dark:border-white dark:bg-white dark:text-neutral-950"
            : "border-neutral-300 group-hover:border-neutral-400 dark:border-neutral-600 dark:group-hover:border-neutral-500",
        )}
      >
        {selected &&
          (variant === "radio" ? (
            <span className="size-1.5 rounded-full bg-white dark:bg-neutral-950" />
          ) : (
            <Check className="size-3" strokeWidth={3} />
          ))}
      </span>
    </button>
  )
}
