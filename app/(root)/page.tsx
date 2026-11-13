import { Suspense } from "react"

import { BrandsStripWrapper } from "@/components/home/BrandsStripWrapper"
import CategorySection from "@/components/home/CategorySection"
import Hero from "@/components/home/Hero"
import { ArticleSection } from "@/features/articles/components/ArticleSection"
import { getCartQuantities } from "@/features/cart/queries/get-cart-quantities"
import { ProductSlider } from "@/features/product/components/ProductSlider"
import { ProductSliderSkeleton } from "@/features/product/components/ProductSliderSkeleton"
import getProducts from "@/features/product/queries/get-products"

async function FeaturedProducts() {
  const [{ products }, { isLoggedIn, quantities }] = await Promise.all([
    getProducts(),
    getCartQuantities(),
  ])

  return (
    <ProductSlider
      products={products}
      quantities={quantities}
      isLoggedIn={isLoggedIn}
    />
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <BrandsStripWrapper />

      <Suspense fallback={<ProductSliderSkeleton />}>
        <FeaturedProducts />
      </Suspense>

      <CategorySection />

      <ArticleSection />
    </>
  )
}
