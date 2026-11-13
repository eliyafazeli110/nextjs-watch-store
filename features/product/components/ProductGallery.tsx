"use client"

import { Dialog as BaseDialog } from "@base-ui/react/dialog"
import Image from "next/image"
import { useState } from "react"

import type { Product } from "@/types"

import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  product: Product
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const { images } = product
  const currentImage = images[selectedIndex]

  if (images.length === 0) {
    return (
      <div className="aspect-4/3 w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900" />
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        className="relative aspect-4/3 w-full cursor-zoom-in overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900"
        onClick={() => setIsZoomed(true)}
        aria-label={`بزرگ‌نمایی تصویر ${product.name}`}
      >
        <Image
          src={currentImage}
          alt={product.name}
          fill
          priority
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent dark:from-black/30" />
      </button>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`تصویر ${index + 1}`}
              className={cn(
                "group relative size-16 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200",
                selectedIndex === index
                  ? "border-neutral-950 dark:border-white"
                  : "border-transparent hover:border-neutral-300 dark:hover:border-white/30",
              )}
            >
              <Image
                src={image}
                alt={`${product.name} - ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="64px"
              />
              {selectedIndex !== index && (
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0 dark:bg-black/30" />
              )}
            </button>
          ))}
        </div>
      )}

      <BaseDialog.Root open={isZoomed} onOpenChange={setIsZoomed}>
        <BaseDialog.Portal>
          <BaseDialog.Backdrop
            className={cn(
              "fixed inset-0 z-100 bg-black/90 backdrop-blur-sm",
              "transition-opacity duration-200",
              "data-starting-style:opacity-0 data-ending-style:opacity-0",
            )}
          />
          <BaseDialog.Popup
            className={cn(
              "fixed left-1/2 top-1/2 z-100 h-[90svh] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 outline-none",
              "transition-all duration-200",
              "data-starting-style:scale-95 data-starting-style:opacity-0",
              "data-ending-style:scale-95 data-ending-style:opacity-0",
            )}
          >
            <BaseDialog.Close className="relative block h-full w-full cursor-zoom-out">
              <Image
                src={currentImage}
                alt={product.name}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </BaseDialog.Close>
          </BaseDialog.Popup>
        </BaseDialog.Portal>
      </BaseDialog.Root>
    </div>
  )
}
