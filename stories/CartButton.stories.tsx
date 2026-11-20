// stories/CartButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { CartButton } from "../features/cart/components/CartButton"

const meta = {
  title: "Components/CartButton",
  component: CartButton,
  tags: ["autodocs"],
  argTypes: {
    stock: { control: "number" },
    cartQuantity: { control: "number" },
    isLoggedIn: { control: "boolean" },
  },
} satisfies Meta<typeof CartButton>

export default meta
type Story = StoryObj<typeof CartButton>

// استوری ۱: حالت عادی (موجود)
export const Default: Story = {
  args: {
    productId: "1",
    stock: 10,
    cartQuantity: 0,
    isLoggedIn: true,
  },
}

// استوری ۲: ناموجود
export const OutOfStock: Story = {
  args: {
    productId: "1",
    stock: 0,
    cartQuantity: 0,
    isLoggedIn: true,
  },
}

// استوری ۳: کاربر لاگین نکرده
export const NotLoggedIn: Story = {
  args: {
    productId: "1",
    stock: 10,
    cartQuantity: 0,
    isLoggedIn: false,
  },
}
