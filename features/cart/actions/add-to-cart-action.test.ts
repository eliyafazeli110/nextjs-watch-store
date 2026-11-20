import { beforeEach, describe, expect, it, vi } from "vitest"

import { addToCartAction } from "./add-to-cart.action"

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  revalidatePath: vi.fn(),

  productFindUnique: vi.fn(),

  cartUpsert: vi.fn(),

  cartItemFindUnique: vi.fn(),
  cartItemUpsert: vi.fn(),
  cartItemFindFirst: vi.fn(),
  cartItemDelete: vi.fn(),
  cartItemUpdate: vi.fn(),
}))

vi.mock(import("@/lib/dal"), () => ({
  getSession: mocks.getSession,
}))

vi.mock(import("@/lib/prisma"), () => ({
  prisma: {
    product: {
      findUnique: mocks.productFindUnique,
    },
    cart: {
      upsert: mocks.cartUpsert,
    },
    cartItem: {
      findUnique: mocks.cartItemFindUnique,
      upsert: mocks.cartItemUpsert,
      findFirst: mocks.cartItemFindFirst,
      delete: mocks.cartItemDelete,
      update: mocks.cartItemUpdate,
    },
  } as unknown as typeof import("@/lib/prisma").prisma,
}))

vi.mock(import("next/cache"), () => ({
  revalidatePath: mocks.revalidatePath,
}))

describe("addToCartAction", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should return an error when input is invalid", async () => {
    const result = await addToCartAction({
      productId: "",
      delta: 1,
    })

    expect(result).toEqual({
      success: false,
      error: "اطلاعات ارسالی نامعتبر است",
    })

    expect(mocks.getSession).not.toHaveBeenCalled()
  })

  it("should return an error when user is not authenticated", async () => {
    mocks.getSession.mockResolvedValue(null)

    const result = await addToCartAction({
      productId: "product-1",
      delta: 1,
    })

    expect(result).toEqual({
      success: false,
      error: "ابتدا وارد شوید",
    })

    expect(mocks.getSession).toHaveBeenCalledExactlyOnceWith()
    expect(mocks.productFindUnique).not.toHaveBeenCalled()
    expect(mocks.cartUpsert).not.toHaveBeenCalled()
  })
})
