import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from './countSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";



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

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
