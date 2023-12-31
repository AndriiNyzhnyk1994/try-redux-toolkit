import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IPost } from "../models/IPost"

export const postAPI = createApi({
    reducerPath: 'postAPI',
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            // 1. First generic <IPost[]> meains that our hook useFetchAllPostsQuery
            //    will return array of Posts as data
            // 2. Second generic <number> means the type of argument,
            //    that our hook useFetchAllPostsQuery will be accept:
            // 3. Finally, how it will be calling:
            //    const { data } = useFetchAllPostsQuery( 5 )
            //    where `data` has type `IPost[]`, and `5` has type number
             
            query: (limit: number = 5) => ({
                // parameter `limit` will be accepted as argument in useFetchAllPostsQuery
                url: '/posts',
                params: {
                    _limit: limit
                },
                headers: {}
                // params object helps us to avoid using `?` symbol in URL string
                // before query parameters
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
    })
})
