import { configureStore } from "@reduxjs/toolkit";

import carinhoReducer from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carinhoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
