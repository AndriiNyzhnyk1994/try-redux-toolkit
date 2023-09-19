import { configureStore } from "@reduxjs/toolkit";
import { goodsAPI } from "./goodsAPI";

export const store5 = configureStore({
    reducer: {
        [goodsAPI.reducerPath]: goodsAPI.reducer
    //we haven't made any `reducer` key manually but `createApi` did it automatically
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsAPI.middleware)        
})

// .concat - it's array method that adds its argue to 
// array by left of .concat
        