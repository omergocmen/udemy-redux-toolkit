import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getCourses = createAsyncThunk("courses/getCourses", async () => {
  return fetch("http://localhost:3000/courses")
    .then((response) => response.json()).catch(err=>console.log(err))
});

export const coursesSlice = createSlice({
    name: "courses",
    initialState: {
      courses: [],
      loading:false
    },
    reducers: {
      setCurrentCourses: (state) => {
        console.log("şuanlık boş")
      }
    },
    extraReducers:{
        [getCourses.pending]:(state,action)=>{
          state.loading=true
        },
        [getCourses.fulfilled]:(state,action)=>{
          state.loading=false;
          state.courses=action.payload;
        },
        [getCourses.rejected]:(state,action)=>{
          state.loading=false
        },
    }
  });
  
  


export const { setCurrentCourses } = coursesSlice.actions

export default coursesSlice.reducer