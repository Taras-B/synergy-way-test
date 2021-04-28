import { combineReducers } from 'redux'

import { productReducer, ProductStateType } from './products/reducer'

export const rootReducer = combineReducers({
  product: productReducer,
})

export type RootState = {
  product: ProductStateType
}
