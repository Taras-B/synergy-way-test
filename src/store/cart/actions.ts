import {
  EnumCartActionType,
  ICart,
  ISetAddToCartAction,
  ISetDeleteToCartAction,
} from './types'

export const actionsCart = {
  add: (payload: ICart): ISetAddToCartAction => ({
    type: EnumCartActionType.ADD_TO_CART,
    payload,
  }),
  delete: (payload: number): ISetDeleteToCartAction => ({
    type: EnumCartActionType.DELETE_TO_CART,
    payload,
  }),
}
