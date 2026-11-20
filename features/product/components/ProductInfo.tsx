import { ShieldCheck, Truck } from "lucide-react"

import type { Product } from "@/types"

import { CartButton } from "@/features/cart/components/CartButton"

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex flex-col text-right">
      <h1 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl dark:text-white">
        {product.name}
      </h1>

      <div className="mt-6 flex items-center gap-3 text-sm">
        <span
          className={`size-2.5 rounded-full ${product.stock ? "bg-green-500" : "bg-red-500"}`}
        />
        <span className="text-neutral-600 dark:text-neutral-400">
          {product.stock ? "موجود در انبار" : "ناموجود"}
        </span>
      </div>

      <div className="mt-6 border-y border-neutral-200 py-5 dark:border-neutral-800">
        <span className="text-3xl font-bold text-neutral-950 dark:text-white">
          {product.price.toLocaleString("fa-IR")}
          <span className="mr-2 text-base font-normal text-neutral-500">
            تومان
          </span>
        </span>
      </div>

      <p className="mt-6 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
        {product.description}
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="w-full sm:w-auto">
          <CartButton
            productId={product.id}
            stock={product.stock}
            isLoggedIn={true}
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
          <ShieldCheck className="size-4" />
          گارانتی اصالت کالا
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
          <Truck className="size-4" />
          ارسال سریع به سراسر کشور
        </div>
      </div>
    </div>
  )
}
