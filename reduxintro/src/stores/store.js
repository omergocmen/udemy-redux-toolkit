import { configureStore } from "@reduxjs/toolkit";
import courseReducer from '../components/courses/coursesSlice'
import teacherReducer from '../components/teachers/teachersSlice'
import loginReducer from '../components/login/loginSlice'

export const store = configureStore({
    reducer:{
        courses:courseReducer,
        teachers:teacherReducer,
        login:loginReducer
    },
})

