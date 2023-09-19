import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const goodsAPI = createApi({
    reducerPath: 'goodsAPI',
    // reducer path it is how will dislay goodsAPI in our store 
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (build) => ({
        getGoods: build.query({
            query: () => `goods`,
        })
    })
})
