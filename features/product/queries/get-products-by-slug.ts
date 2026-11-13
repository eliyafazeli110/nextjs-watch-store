import "server-only"

import type { Product } from "@/types"

import { prisma } from "@/lib/prisma"

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const data = await prisma.product.findUnique({
    where: { slug },
  })

  if (!data) {
    return null
  }

  return data as Product
}
