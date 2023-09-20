import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const goodsAPI = createApi({
    reducerPath: 'goodsAPI',
    // reducer path it is how will dislay goodsAPI state in our store
    tagTypes: ['Products'], 
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (build) => ({
        getGoods: build.query({
            query: (limit = '') => `goods?${limit && `_limit=${limit}`}`,
            // ? =  for requests means that we will use query params
            // _limit - query param. Responsibility - returns specific amount of items 
            
            providesTags: (result) => result 
                ? [
                    ...result.map( ({id}) => ({type: 'Products', id}) ),
                    {type: 'Products', id: 'LIST'}
                ] 
                : [{type: 'Products', id: 'LIST'}]
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url: `goods`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}]
        })
    })
})
// build.query we must use when we need to fetch some data from server 
// (like GET request)
// build.mutation we must use when we need to change server data 
// (like POST PUT DELETE)

export const { useGetGoodsQuery, useAddProductMutation } = goodsAPI

// useGetGoodsQuery - hook that has made automatically by createApi() in goodsAPI
// this hook's name based on the endpoint name (getGoods)
// by adding `use` as prefix and `Query` as postfix 
// and changed `get` to upper case according to the Camel Case rules 



