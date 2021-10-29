import {createReducer} from '@reduxjs/toolkit'
import * as R from 'ramda' //
import {addDishToCart, removeDishFromCart} from '../actions'

interface IUserState {
  dishes: any[],
}

const initialState: IUserState = {
  dishes: [
    {
      id: 1,
      name: 'Тартар',
      price: '120',
      image: 'https://www.edimdoma.ru/system/images/contents/0000/6787/wide/AdobeStock_275611083_%D0%B8%D1%81%D0%BF%D1%80.jpg?1564142039',
    },
    {
      id: 2,
      name: 'Тунец',
      price: '150',
      image: 'https://www.edimdoma.ru/system/images/contents/0000/6788/wide/AdobeStock_166014726_result.jpeg?1564134468',
    },
    {
      id: 3,
      name: 'Мидии',
      price: '90',
      image: 'https://www.edimdoma.ru/system/images/contents/0000/6789/wide/AdobeStock_196463507_result.jpeg?1564134469',
    }
  ],
}

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addDishToCart, (state, action) => {
      return R.append(action.payload, state)
    })
    .addCase(removeDishFromCart, (state, action) => {
      return R.without(R.of(action.payload), state)
    })
})

export default cartReducer
