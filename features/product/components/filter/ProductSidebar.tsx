"use client"

import { cn, toastManager } from "@/lib/utils"

import { BRANDS, CATEGORIES } from "../../constans/filter-options"
import { useProductFilters } from "../../use-product-filters"
import { FilterActions } from "./FilterAction"
import { FilterGroup } from "./FilterGroup"

export function ProductSidebar({ className }: { className?: string }) {
  const {
    filters,
    hasFilters,
    isPending,
    toggleBrand,
    toggleCategory,
    apply,
    clear,
  } = useProductFilters()

  function handleClear() {
    if (!hasFilters) {
      toastManager.add({
        type: "warning",
        description: "هیچ فیلتری انتخاب نشده است.",
      })
      return
    }

    clear()
  }

  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <FilterGroup
        title="برندها"
        options={BRANDS}
        variant="checkbox"
        isSelected={(slug) => filters.brands.includes(slug)}
        onToggle={toggleBrand}
      />
      <FilterGroup
        title="دسته‌بندی"
        options={CATEGORIES}
        variant="radio"
        isSelected={(slug) => filters.category === slug}
        onToggle={toggleCategory}
      />
      <FilterActions
        isPending={isPending}
        onApply={apply}
        onClear={handleClear}
      />
    </div>
  )
}
