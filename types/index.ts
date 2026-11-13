import type { Product as PrismaProduct } from "@/generated/prisma/client"

export type ActionResult<T = undefined> =
  { success: false; error: string } | { success: true; data?: T }

export interface ProductSpecifications {
  movement?: string
  caseMaterial?: string
  caseDiameter?: string
  waterResistance?: string
}

export type Product = Omit<PrismaProduct, "specifications"> & {
  specifications: ProductSpecifications | null
}
