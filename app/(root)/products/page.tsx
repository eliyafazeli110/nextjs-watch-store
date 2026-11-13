import { Suspense } from "react"

import { ProductListSkeleton } from "@/components/ui/skeletons/ProductListSkeleton"
import { ProductSidebar } from "@/features/product/components/filter/ProductSidebar"
import { MobileFiltersDrawer } from "@/features/product/components/MobileFilterDrawer"
import { ProductsContent } from "@/features/product/components/ProductsContent"

interface ProductsPageProps {
  searchParams: Promise<{
    brand?: string | string[]
    category?: string
    page?: string
  }>
}

async function ProductsPageContent({ searchParams }: ProductsPageProps) {
  const params = await searchParams

  const searchKey = new URLSearchParams(
    Object.entries(params).flatMap(([key, value]) =>
      Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]],
    ),
  ).toString()

  return (
    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[260px_1fr] lg:items-start lg:gap-8">
      <aside className="hidden lg:block">
        <ProductSidebar key={searchKey} />
      </aside>

      <div className="flex flex-col gap-6">
        <div className="lg:hidden">
          <MobileFiltersDrawer />
        </div>

        <Suspense key={searchKey} fallback={<ProductListSkeleton />}>
          <ProductsContent searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  return (
    <div className="mx-auto w-full max-w-7xl py-8">
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductsPageContent searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
