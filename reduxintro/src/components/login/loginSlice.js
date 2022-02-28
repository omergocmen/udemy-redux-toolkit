import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";



export const loginSlice = createSlice({
    name: "login",
    initialState: {
      userIn: {email:"omer@gmail.com",password:"125963",auth:false},
    },
    reducers: {
      authControl: (state) => {
        state.userIn.auth=!state.userIn.auth
        console.log(state.userIn.auth)
      }
    }
  });
  

export const { authControl } = loginSlice.actions
export default loginSlice.reducer