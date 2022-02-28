import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getTeachers = createAsyncThunk("teachers/getTeachers", async () => {
  return fetch("http://localhost:3000/teachers")
    .then((response) => response.json()).catch(err=>console.log(err))
});

export const teachersSlice = createSlice({
    name: "teachers",
    initialState: {
      teachers: [],
      loading:false
    },
    reducers: {
      setCurrentTeachers: (state) => {
        console.log("şuanlık boş")
      }
    },
    extraReducers:{
        [getTeachers.pending]:(state,action)=>{
          state.loading=true
        },
        [getTeachers.fulfilled]:(state,action)=>{
          state.loading=false;
          state.teachers=action.payload;
        },
        [getTeachers.rejected]:(state,action)=>{
          state.loading=false
        },
    }
  });
  
  


export const { setCurrentTeachers } = teachersSlice.actions

export default teachersSlice.reducer