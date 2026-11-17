import { Suspense } from "react"

import { ProductDetailsSkeleton } from "@/components/ui/skeletons/ProductDetailsSkeleton"
import { ProductDetails } from "@/features/product/components/ProductDetails"
import { Metadata } from "next"
import { getProductBySlug } from "@/features/product/queries/get-products-by-slug"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params

  const product = await getProductBySlug(slug)

  if (!product) {
    return {
      title: "محصول پیدا نشد | واچ‌لند",
    }
  }

  const description = product.description
    ? product.description.slice(0, 160)
    : `خرید ${product.name} با بهترین قیمت و ارسال سریع از واچ‌لند.`

  return {
    title: `${product.name} | واچ‌لند`,
    description: description,
    openGraph: {
      title: product.name,
      description: description,
      images: product.images.length > 0 ? [product.images[0]] : [],
    },
  }
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
