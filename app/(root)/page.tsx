import { Suspense } from "react"

import ProductList from "@/components/shared/product/ProductList"
import getLatestProducts from "@/lib/actions/product.action"

async function LatestProducts() {
  const products = await getLatestProducts()

  return <ProductList data={products} limit={4} />
}

export default function HomePage() {
  return (
    <Suspense fallback={<p>در حال بارگذاری محصولات...</p>}>
      <LatestProducts />
    </Suspense>
  )
}
