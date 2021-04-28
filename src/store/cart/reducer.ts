import { EnumCartActionType, ICartState, CartActionT } from './types'

const initialState: ICartState = {
  cart: [],
}

export const ordersReducer = (state = initialState, action: CartActionT): ICartState => {
  switch (action.type) {
    case EnumCartActionType.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] }
    case EnumCartActionType.DELETE_TO_CART:
      if (state.cart.length > 0) {
        return {
          ...state,
          cart: [...state.cart].filter((item) => item.id !== action.payload),
        }
      } else {
        return state
      }

    default:
      return state
  }
}
