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
    <>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery product={product} />

        <div className="lg:top-24 lg:h-fit">
          <ProductInfo product={product} />
        </div>
      </div>

      <ProductSpecifications product={product} />
    </>
  )
}
