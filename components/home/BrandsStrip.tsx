"use client"

import Link from "next/link"
import { Autoplay, FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"

const BRANDS = [
  { name: "SEIKO", slug: "seiko" },
  { name: "CASIO", slug: "casio" },
  { name: "TISSOT", slug: "tissot" },
  { name: "CITIZEN", slug: "citizen" },
  { name: "ORIENT", slug: "orient" },
  { name: "SEIKO", slug: "seiko" },
  { name: "CASIO", slug: "casio" },
  { name: "TISSOT", slug: "tissot" },
  { name: "CITIZEN", slug: "citizen" },
  { name: "ORIENT", slug: "orient" },
]

export function BrandsStrip() {
  return (
    <div className="relative w-full border-y border-neutral-200 py-8 bg-[#fafafa] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32 dark:from-neutral-950" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32 dark:from-neutral-950" />

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={60}
        slidesPerView={3}
        loop={true}
        freeMode={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="w-full"
      >
        {BRANDS.map((brand, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <Link
              href={`/products?brand=${brand.slug}`}
              className="group flex items-center justify-center py-2"
            >
              <span className="text-xl font-black tracking-[0.2em] text-neutral-300 transition-colors duration-300 group-hover:text-neutral-950 sm:text-2xl dark:text-neutral-700 dark:group-hover:text-white">
                {brand.name}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
