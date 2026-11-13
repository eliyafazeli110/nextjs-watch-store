import type { FilterOptionItem } from "../../constans/filter-options"

import { FilterOption } from "./FilterOption"

interface FilterGroupProps {
  title: string
  options: FilterOptionItem[]
  variant: "checkbox" | "radio"
  isSelected: (slug: string) => boolean
  onToggle: (slug: string) => void
}

export function FilterGroup({
  title,
  options,
  variant,
  isSelected,
  onToggle,
}: FilterGroupProps) {
  return (
    <section>
      <h3 className="mb-4 text-sm font-bold text-neutral-950 dark:text-white">
        {title}
      </h3>
      <div className="flex flex-col gap-1">
        {options.map((option) => (
          <FilterOption
            key={option.slug}
            label={option.name}
            variant={variant}
            selected={isSelected(option.slug)}
            onToggle={() => onToggle(option.slug)}
          />
        ))}
      </div>
    </section>
  )
}
