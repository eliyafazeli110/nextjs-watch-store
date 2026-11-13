"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { A11y, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"

import type { Product } from "@/types"

import { cn } from "@/lib/utils"

import { ProductCard } from "./ProductCard"

interface ProductSliderProps {
  products: Product[]
  quantities: Record<string, number>
  isLoggedIn: boolean
}

export function ProductSlider({
  products,
  quantities,
  isLoggedIn,
}: ProductSliderProps) {
  const buttonClassName = cn(
    "swiper-button-custom absolute top-[40%] z-10 flex -translate-y-1/2 items-center justify-center rounded-full",
    "size-8 md:size-10",
    "bg-white/90 text-neutral-950 shadow-md backdrop-blur-sm",
    "hover:bg-white hover:scale-110 active:scale-95",
    "dark:bg-neutral-800/90 dark:text-white dark:border dark:border-neutral-700",
    "dark:hover:bg-neutral-700 dark:hover:border-neutral-500",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:focus-visible:outline-white",
    "transition-all duration-200",
  )

  return (
    <div className="relative w-full group pt-4 pb-2">
      <h2 className="py-6 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl dark:text-white">
        جدیدترین محصولات
      </h2>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={16}
        slidesPerView={1.2}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          640: { slidesPerView: 2.2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="pb-4!"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="h-auto">
            <ProductCard
              product={product}
              cartQuantity={quantities[product.id] || 0}
              isLoggedIn={isLoggedIn}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className={cn(
          buttonClassName,
          "swiper-button-prev-custom right-0 -mr-2 md:-mr-4 hover:cursor-pointer",
        )}
        aria-label="محصولات قبلی"
      >
        <ChevronRight className="size-4 md:size-5" />
      </button>

      <button
        type="button"
        className={cn(
          buttonClassName,
          "swiper-button-next-custom left-0 -ml-2 md:-ml-4 hover:cursor-pointer",
        )}
        aria-label="محصولات بعدی"
      >
        <ChevronLeft className="size-4 md:size-5" />
      </button>
    </div>
  )
}
