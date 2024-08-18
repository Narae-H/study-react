import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'

// let user = createSlice({
//   name: "user",
//   initialState: { name: "Kim", age: 20 },
//   reducers: {
//     changeName(state) {
//       state.name = "park"
//     },
//     incAgeBy1(state) {
//       state.age += 1
//     },
//     incAge(state, action) {
//       state.age += action.payload
//     }
//   } 
// })
// export let { changeName, incAgeBy1, incAge } = user.actions

let stockList = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
  reducers: {
    changeStocks (state, action) {
      let copiedState = [...state]
      return copiedState[action.payload]+1;
    }
  }
})
export let { changeStocks } = stockList.actions

let cartItems = createSlice({
  name: "cartItems", 
  initialState: [
    {id: 0, name: 'White and Black', count: 2},
    {id: 2, name: 'Grey Yordan', count: 1}
  ],
  reducers: {
    setCartItems (state, action){
      state.map( (item, i)=>{ 
        item.id = action.payload[i].id
        item.name = action.payload[i].name
        item.count = action.payload[i].count
      })
    },
    addItem (state, action){
      let foundItem = state.find( (item, i)=>{  
        return item.id == action.payload.id
      })

      if( foundItem != null ) {
        foundItem.count++
      } else {
        state.push(action.payload);
      }
    },
    incCountBy1 (state, action) {
      let foundItem = state.find( (item, i)=> item.id == action.payload )
      foundItem.count ++
    },
    decCountBy1(state, action){
      let foundItem = state.find( (item, i)=> item.id == action.payload )
      if(foundItem.count > 0) {
        foundItem.count--
      } else {
        foundItem.count = 0
      }
    }
  }
})
export let { setCartItems, addItem, incCountBy1, decCountBy1 } = cartItems.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stockList: stockList.reducer,
    cartItems: cartItems.reducer 
  }
}) 