import { combineReducers, configureStore } from "@reduxjs/toolkit";



const rootReducer = combineReducers({

})

export const setupStore4 = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStateType4 = ReturnType<typeof rootReducer>
export type AppStoreType4 = ReturnType<typeof setupStore4>
export type AppDispatchType4 = AppStoreType4['dispatch']