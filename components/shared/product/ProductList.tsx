import { ProductCard } from "./ProductCard"

export default function ProductList({
  data,
  title,
  limit,
}: {
  data: any
  title?: string
  limit?: number
}) {
  const limitData = limit ? data.slice(0, limit) : data

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
      {data.length > 0 &&
        limitData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
    </div>
  )
}
