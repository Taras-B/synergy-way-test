const initialState: ProductStateType = {
  data: [
    {
      id: 1,
      name: 'article 1',
      label:
        'Lorem ipsum dolor sit amex, consenter advising elite sed do elusion tempore incident ut laborer et dolors magna alicia',
      price: 25,
    },
    {
      id: 2,
      name: 'article 2',
      label:
        'Lorem ipsum dolor sit amex, consenter advising elite sed do elusion tempore incident ut laborer et dolors magna alicia',
      price: 35,
    },
    {
      id: 3,
      name: 'article 21',
      label:
        'Lorem ipsum dolor sit amex, consenter advising elite sed do elusion tempore incident ut laborer et dolors magna alicia',
      price: 45,
    },
  ],
}
export type ProductT = { id: number; name: string; price: number; label?: string }
export type ProductStateType = { data: ProductT[] }

export const productReducer = (state = initialState, action: any): ProductStateType => {
  switch (action.type) {
    default:
      return state
  }
}
