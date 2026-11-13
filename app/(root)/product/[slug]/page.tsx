import { Suspense } from "react"

import { ProductDetailsSkeleton } from "@/components/ui/skeletons/ProductDetailsSkeleton"
import { ProductDetails } from "@/features/product/components/ProductDetails"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

async function ProductContent({ params }: ProductPageProps) {
  const { slug } = await params

  return <ProductDetails slug={slug} />
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <ProductContent params={params} />
    </Suspense>
  )
}
