import getProducts from "../queries/get-products"
import { Pagination } from "./Pagination"
import ProductList from "./ProductList"

interface ProductsContentProps {
  searchParams: Promise<{
    brand?: string | string[]
    category?: string
    page?: string
  }>
}

export async function ProductsContent({ searchParams }: ProductsContentProps) {
  const params = await searchParams

  const brands = params.brand ? ([] as string[]).concat(params.brand) : []

  const page = Number(params.page) || 1

  const { products, totalPages, currentPage } = await getProducts({
    brands,
    category: params.category,
    page,
    limit: 8,
  })

  return (
    <>
      <ProductList data={products} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  )
}
