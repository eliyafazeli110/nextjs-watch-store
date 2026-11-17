import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { beforeEach, describe, expect, it, vi } from "vitest"

import { CartButton } from "./CartButton"
import { toastManager } from "@/lib/utils"
import { addToCartAction } from "../actions/add-to-cart.action"

const mockChangeCartCount = vi.fn()

vi.mock("../context/use-cart-count", () => ({
  useCartCount: () => ({
    changeCartCount: mockChangeCartCount,
  }),
}))

vi.mock("@/features/cart/actions/add-to-cart.action", () => ({
  addToCartAction: vi.fn(),
}))

vi.mock("@/lib/utils", () => ({
  toastManager: {
    add: vi.fn(),
  },
}))

describe("CartButton", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should disable the button when product is out of stock", () => {
    render(<CartButton productId="product-1" stock={0} isLoggedIn={true} />)
    const button = screen.getByRole("button", {
      name: "ناموجود",
    })
    expect(button).toBeDisabled()
  })

  it("should be enabled when cart quantity is less than stock", () => {
    render(
      <CartButton productId="1" stock={5} cartQuantity={4} isLoggedIn={true} />,
    )
    const button = screen.getByRole("button", { name: "افزودن به سبد خرید" })
    expect(button).toBeEnabled()
  })

  it("should disable the button when cart quantity reaches stock", () => {
    render(
      <CartButton
        productId="product-1"
        stock={5}
        cartQuantity={5}
        isLoggedIn={true}
      />,
    )
    const button = screen.getByRole("button", {
      name: "ناموجود",
    })
    expect(button).toBeDisabled()
  })

  it("should disable the button when cart quantity exceeds stock", () => {
    render(
      <CartButton
        productId="product-1"
        stock={5}
        cartQuantity={6}
        isLoggedIn={true}
      />,
    )
    const button = screen.getByRole("button", {
      name: "ناموجود",
    })
    expect(button).toBeDisabled()
  })

  it("should show error toast and not call action if user is not logged in", async () => {
    const user = userEvent.setup()
    render(<CartButton productId="1" stock={5} isLoggedIn={false} />)

    const button = screen.getByRole("button", { name: "افزودن به سبد خرید" })
    await user.click(button)

    expect(toastManager.add).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "error",
        description: expect.stringContaining("وارد حساب کاربری"),
      }),
    )
    expect(addToCartAction).not.toHaveBeenCalled()
    expect(mockChangeCartCount).not.toHaveBeenCalled()
  })

  it("should call action, update count, and show success state if logged in", async () => {
    const user = userEvent.setup()

    vi.mocked(addToCartAction).mockResolvedValueOnce({ success: true })

    render(<CartButton productId="1" stock={5} isLoggedIn={true} />)
    const button = screen.getByRole("button", { name: "افزودن به سبد خرید" })

    await user.click(button)

    expect(addToCartAction).toHaveBeenCalledWith({ productId: "1", delta: 1 })

    expect(mockChangeCartCount).toHaveBeenCalledWith(1)

    expect(toastManager.add).toHaveBeenCalledWith(
      expect.objectContaining({ type: "success" }),
    )

    await waitFor(() => {
      expect(button).toBeDisabled()
      expect(button.querySelector("svg")).toBeInTheDocument()
    })
  })

  it("should show error toast if server action fails", async () => {
    const user = userEvent.setup()

    vi.mocked(addToCartAction).mockResolvedValueOnce({
      success: false,
      error: "موجودی کافی نیست",
    })

    render(<CartButton productId="1" stock={5} isLoggedIn={true} />)
    const button = screen.getByRole("button", { name: "افزودن به سبد خرید" })

    await user.click(button)

    await waitFor(() => {
      expect(toastManager.add).toHaveBeenCalledWith(
        expect.objectContaining({
          type: "error",
          description: "افزودن محصول انجام نشد. دوباره تلاش کنید.",
        }),
      )
    })
  })
})
