import { ICart } from '../cart/types'

export const removeItemFromCart = (cartItems: ICart[], cartItemToRemove: number) => {
  const existingCartItem = cartItems.find((item) => item.id === cartItemToRemove)

  if (existingCartItem?.amount === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove)
  }

  return cartItems.map((item) =>
    item.id === cartItemToRemove ? { ...item, amount: item.amount - 1 } : item
  )
}
