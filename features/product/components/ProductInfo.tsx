import { Product } from "@/types"

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex flex-col text-right">
      <h1 className="mt-4 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl dark:text-white">
        {product.name}
      </h1>

      <div className="mt-8 border-y border-neutral-200 py-6 dark:border-white/10">
        <span className="text-xl font-medium text-neutral-950 dark:text-white">
          {product.price.toLocaleString("fa-IR")} تومان
        </span>
      </div>

      <p className="mt-8 max-w-xl text-sm leading-8 text-neutral-500 sm:text-base dark:text-white/50">
        {product.description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm">
        <span
          className={`size-2 rounded-full ${
            product.stock ? "bg-green-500" : "bg-red-500"
          }`}
        />

        <span className="text-neutral-600 dark:text-white/60">
          {product.stock ? "موجود در انبار" : "ناموجود"}
        </span>
      </div>
    </div>
  )
}
