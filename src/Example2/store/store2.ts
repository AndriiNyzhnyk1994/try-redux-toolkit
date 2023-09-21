import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import { postAPI } from "../services/PostServise";

const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore2 = () => {
    return configureStore({
        reducer: rootReducer,
        //it's something like united reducer o☺
        middleware: (getDefaultMiddleware) => {
           return getDefaultMiddleware().concat(postAPI.middleware)
        }
    }) 

}
// setupStore - it's a function that returns a whole store (with its own dispatch)


export type RootStateType = ReturnType<typeof rootReducer>
// here we created a type of our whole state from all reducers in common

export type AppStoreType = ReturnType<typeof setupStore2>
// here we created a type of our store (no state. State is just a part of store)

export type AppDispatchType = AppStoreType['dispatch']
// here we created a type of our store's dispatch 