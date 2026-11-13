import { prisma } from "@/lib/prisma"

import { products } from "../data/products"
import { brands } from "./brands"
import { categories } from "./categories"

async function main() {
  await Promise.all(
    brands.map((brand) =>
      prisma.brand.upsert({
        where: { slug: brand.slug },
        update: { name: brand.name },
        create: brand,
      }),
    ),
  )

  await Promise.all(
    categories.map((category) =>
      prisma.category.upsert({
        where: { slug: category.slug },
        update: { name: category.name },
        create: category,
      }),
    ),
  )

  await Promise.all(
    products.map((product) =>
      prisma.product.upsert({
        where: { slug: product.slug },
        update: product,
        create: product,
      }),
    ),
  )
}

main()
  .catch((error) => {
    console.error("Seed failed:", error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
