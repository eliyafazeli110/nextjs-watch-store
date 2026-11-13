export interface FilterState {
  brands: string[]
  category: string
}

export function parseFilters(params: URLSearchParams): FilterState {
  return {
    brands: params.getAll("brand"),
    category: params.get("category") ?? "",
  }
}

export function buildFilterQuery({ brands, category }: FilterState): string {
  const params = new URLSearchParams()
  brands.forEach((brand) => params.append("brand", brand))
  if (category) params.set("category", category)
  return params.toString()
}

export function hasActiveFilters({ brands, category }: FilterState): boolean {
  return brands.length > 0 || category !== ""
}

export function toggleInList(list: string[], item: string): string[] {
  return list.includes(item) ? list.filter((i) => i !== item) : [...list, item]
}
