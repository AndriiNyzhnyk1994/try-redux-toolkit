import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from './countSlice'



const rootReducer = combineReducers({
    countReducer
})


export const setupStore3 = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore3>
export type AppDispatchType = AppStoreType['dispatch']
