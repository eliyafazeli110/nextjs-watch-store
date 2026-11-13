import type { NextRequest } from "next/server"

import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? ""

  if (query.length < 2) {
    return Response.json([])
  }

  const products = await prisma.product.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          brandSlug: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
    },
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
  })

  const results = products.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    price: product.price,
    image: product.images[0] ?? null,
    imageAlt: product.name,
    brandName: product.brandSlug,
    categoryName: product.categorySlug,
  }))

  return Response.json(results)
}
