import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import todoListsReducer from './todoListsSlice'
import tasksReducer from './tasksSlice'

const rootReducer = combineReducers({
    todoListsReducer,
    tasksReducer
})

export const setupStore4 = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStateType4 = ReturnType<typeof rootReducer>
export type AppStoreType4 = ReturnType<typeof setupStore4>
export type AppDispatchType4 = AppStoreType4['dispatch']

export const useAppDispatch4 = () => useDispatch<AppDispatchType4>()
export const useAppSelector4: TypedUseSelectorHook<RootStateType4> = useSelector;
