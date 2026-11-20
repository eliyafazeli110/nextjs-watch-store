import { notFound } from "next/navigation"

import { getProductBySlug } from "../queries/get-products-by-slug"
import { ProductGallery } from "./ProductGallery"
import { ProductInfo } from "./ProductInfo"
import { ProductSpecifications } from "./ProductSpecification"

export async function ProductDetails({ slug }: { slug: string }) {
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:gap-20">
      <div className="grid grid-cols-1 pt-6 gap-8 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <ProductGallery product={product} />

        <div className="w-full lg:top-24">
          <ProductInfo product={product} />
        </div>
      </div>

      <ProductSpecifications product={product} />
    </div>
  )
}
