import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'


export const store1 = configureStore({
    reducer: {
        todos: todoReducer
    }
})

export type RootStateType = ReturnType<typeof store1.getState>
export type AppDispatch = typeof store1.dispatch

