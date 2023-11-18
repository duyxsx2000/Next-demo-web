import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../featues/users/uerSlice"
import jobsReducer from "../featues/users/jobsSlice";
import statReducer from "../featues/users/state/states"
import { type } from "os";



export  const store = configureStore({
    reducer: {
        user: userReducer,
        jobs: jobsReducer,
        state: statReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

