import { combineReducers } from 'redux'
import { cartReducer } from './cart/reducer'
import { ICartState } from './cart/types'

import { productReducer, ProductStateType } from './products/reducer'

export const rootReducer = combineReducers({
  productState: productReducer,
  cartState: cartReducer,
})

export type RootState = {
  productState: ProductStateType
  cartState: ICartState
}
