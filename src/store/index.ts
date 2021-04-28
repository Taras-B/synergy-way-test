import { compose, createStore } from 'redux'

import { rootReducer } from './rootReducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const makeStore = createStore(rootReducer, composeEnhancers())

makeStore.subscribe(() => {
  localStorage.setItem('cart-state', JSON.stringify(makeStore.getState().cartState.cart))
})
