import { prisma } from "@/lib/prisma"

import { products } from "../data/products"

async function main() {
  await prisma.product.deleteMany()
  await prisma.product.createMany({ data: products })

  console.log("Data added.")
}

main()
  .catch((error) => {
    console.error("Seed failed:", error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
