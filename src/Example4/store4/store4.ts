import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import todoListsReducer from './todoListsSlice'
import tasksReducer from './tasksSlice'
import { todoListsAPI } from "../services/todoListsService";
import { tasksAPI } from "../services/tasksService";

const rootReducer = combineReducers({
    todoListsReducer,
    tasksReducer,
    [todoListsAPI.reducerPath]: todoListsAPI.reducer,
    [tasksAPI.reducerPath]: tasksAPI.reducer,
})



export const setupStore4 = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware()
                .concat(todoListsAPI.middleware)
                .concat(tasksAPI.middleware)
         }
    })
}

export type RootStateType4 = ReturnType<typeof rootReducer>
export type AppStoreType4 = ReturnType<typeof setupStore4>
export type AppDispatchType4 = AppStoreType4['dispatch']

