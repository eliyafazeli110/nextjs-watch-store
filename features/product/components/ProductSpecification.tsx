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

  if (specifications.length === 0) return null

  return (
    <section className="w-full">
      <h2 className="mb-6 text-xl font-bold text-neutral-950 dark:text-white">
        مشخصات فنی
      </h2>

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {specifications.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 dark:border-neutral-800 sm:odd:border-l"
            >
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
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
