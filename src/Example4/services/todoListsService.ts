import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { TodoListType } from "../models";

export const todoListsAPI = createApi({
    reducerPath: 'todoListsAPI',
    tagTypes: ['TodoLists'],
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://social-network.samuraijs.com/api/1.1/',
        credentials: "include"
    }),
    endpoints: (build) => ({
        fetchTodoLists: build.query<TodoListType[], number>({
            query: (limit: number = 5) => ({
                url: 'todo-lists',
                params: {
                    _limit: limit
                },
                headers: {
                    'API-KEY': 'a2db3bdd-9ae5-4fe8-ae61-677aa64cba58'
                }
            }),
            providesTags: result => ['TodoLists']
        }),
        createTodoList: build.mutation<{ item: TodoListType }, { title: string }>({
            query: (body) => ({
                url: 'todo-lists',
                method: 'POST',
                body
            }),
            invalidatesTags: ['TodoLists']
        }),
        updateTodoList: build.mutation({
            query: (body) => ({
                url: `todo-lists/${body.id}`,
                method: 'PUT',
                body: { title: body.title }
            }),
            invalidatesTags: ['TodoLists']
        }),
        deleteTodoList: build.mutation({
            query: (body) => ({
                url: `todo-lists/${body.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['TodoLists']
        }),
    })
})