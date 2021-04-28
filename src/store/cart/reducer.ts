import { EnumCartActionType, ICartState, CartActionT } from './types'

const initialState: ICartState = {
  cart: [],
}

export const cartReducer = (state = initialState, action: CartActionT): ICartState => {
  switch (action.type) {
    case EnumCartActionType.LOAD_CART:
      return {
        ...state,
        cart: [...action.payload],
      }
    case EnumCartActionType.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart].find((item) => item.id === action.payload.id)
          ? [...state.cart].map((item) => {
              if (item.id === action.payload.id) {
                return {
                  ...item,
                  amount: (item.amount += 1),
                }
              }
              return item
            })
          : [...state.cart, { ...action.payload, amount: 1 }],
      }
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
