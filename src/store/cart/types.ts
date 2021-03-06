import { Action } from 'redux'

export enum EnumCartActionType {
  ADD_TO_CART = 'cart/ADD_TO_CART',
  LOAD_CART = 'cart/LOAD_CART',
  DELETE_TO_CART = 'cart/SET_DELETE_TO_CART',
}

export interface ICart {
  id: number
  name: string
  price: number
  amount: number
}
export interface ICartState {
  cart: ICart[]
}

// Action type
export type PayloadAddToCart = Omit<ICart, 'amount'>
export interface ISetAddToCartAction extends Action<EnumCartActionType> {
  type: EnumCartActionType.ADD_TO_CART
  payload: PayloadAddToCart
}
export interface ILoadCartAction extends Action<EnumCartActionType> {
  type: EnumCartActionType.LOAD_CART
  payload: ICart[]
}

export interface ISetDeleteToCartAction extends Action<EnumCartActionType> {
  type: EnumCartActionType.DELETE_TO_CART
  payload: number
}

export type CartActionT = ISetAddToCartAction | ISetDeleteToCartAction | ILoadCartAction
