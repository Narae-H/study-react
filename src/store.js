import { configureStore, createSlice } from '@reduxjs/toolkit'

let userName = createSlice({
  name: "userName",
  initialState: "kim" 
})

let stockList = createSlice({
  name: "stock",
  initialState: [10, 11, 12]
})

let cartItems = createSlice({
  name: "cartItems", 
  initialState: [
    {id: 0, name: 'White and Black', count: 2},
    {id: 2, name: 'Grey Yordan', count: 1}
  ]
})

export default configureStore({
  reducer: { 
    userName : userName.reducer,
    stockList: stockList.reducer,
    cartItems: cartItems.reducer 
  }
}) 