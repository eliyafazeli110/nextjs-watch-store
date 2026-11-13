import { Product } from "@/types"

interface ProductSpecificationsProps {
  product: Product
}

export function ProductSpecifications({ product }: ProductSpecificationsProps) {
  const specifications = [
    { label: "نوع موتور", value: product.specifications?.movement },
    { label: "جنس قاب", value: product.specifications?.caseMaterial },
    { label: "قطر قاب", value: product.specifications?.caseDiameter },
    {
      label: "مقاومت در برابر آب",
      value: product.specifications?.waterResistance,
    },
  ].filter((item): item is { label: string; value: string } =>
    Boolean(item.value),
  )

  if (specifications.length === 0) {
    return null
  }

  return (
    <section className="border-t border-neutral-200 py-16 dark:border-white/10">
      <div>
        <h2 className="mt-4 text-2xl font-medium text-neutral-950 dark:text-white">
          مشخصات محصول
        </h2>

        <div className="mt-8 grid grid-cols-1 border-t border-neutral-200 sm:grid-cols-2 dark:border-white/10">
          {specifications.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between border-b border-neutral-200 py-5 sm:px-4 dark:border-white/10"
            >
              <span className="text-sm text-neutral-500 dark:text-white/40">
                {item.label}
              </span>

              <span className="text-sm font-medium text-neutral-950 dark:text-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
