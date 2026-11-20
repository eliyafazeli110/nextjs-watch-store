import "server-only"

import type { Prisma } from "@/generated/prisma/client"
import type { Product } from "@/types"

import { prisma } from "@/lib/prisma"

interface GetProductsParams {
  brands?: string[]
  category?: string
  page?: number
  limit?: number
}

export default async function getProducts({
  brands,
  category,
  page = 1,
  limit = 12,
}: GetProductsParams = {}) {
  const where = {
    ...(brands?.length && {
      brandSlug: { in: brands },
    }),
    ...(category && {
      categorySlug: category,
    }),
  } satisfies Prisma.ProductWhereInput

  const skip = (page - 1) * limit

  const [products, totalCount] = await Promise.all([
    prisma.product.findMany({
      where,
      include: { brand: true, category: true },
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      skip,
      take: limit,
    }),
    prisma.product.count({ where }),
  ])

  return {
    products: products as Product[],
    totalCount,
    totalPages: Math.ceil(totalCount / limit),
    currentPage: page,
  }
}
