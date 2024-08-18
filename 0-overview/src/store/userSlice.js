import { createSlice } from "@reduxjs/toolkit"

let user = createSlice({
    name: "user",
    initialState: { name: "Kim", age: 20 },
    reducers: {
      changeName(state) {
        state.name = "park"
      },
      incAgeBy1(state) {
        state.age += 1
      },
      incAge(state, action) {
        state.age += action.payload
      }
    } 
  })
  export let { changeName, incAgeBy1, incAge } = user.actions

  export default user