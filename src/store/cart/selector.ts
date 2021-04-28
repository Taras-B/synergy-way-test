import { createSelector } from 'reselect'
import { RootState } from '../rootReducer'

export const cartList = (state: RootState) => state.cartState.cart

export const totalPriceSelector = createSelector(cartList, (list) => {
  return list.reduce((acc, item) => acc + item.amount * item.price, 0)
})
