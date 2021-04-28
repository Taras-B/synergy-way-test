import {
  EnumCartActionType,
  ICart,
  ILoadCartAction,
  ISetAddToCartAction,
  ISetDeleteToCartAction,
  PayloadAddToCart,
} from './types'

export const actionsCart = {
  load: (payload: ICart[]): ILoadCartAction => ({
    type: EnumCartActionType.LOAD_CART,
    payload,
  }),
  add: (payload: PayloadAddToCart): ISetAddToCartAction => ({
    type: EnumCartActionType.ADD_TO_CART,
    payload,
  }),
  delete: (payload: number): ISetDeleteToCartAction => ({
    type: EnumCartActionType.DELETE_TO_CART,
    payload,
  }),
}
