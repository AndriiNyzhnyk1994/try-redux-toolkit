import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { TodoListType } from "../models";
import { TaskType } from "../store4/ActionCreators";

export const tasksAPI = createApi({
    reducerPath: 'tasksAPI',
    tagTypes: ['Tasks'],
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://social-network.samuraijs.com/api/1.1/',
        credentials: "include"
    }),
    endpoints: (build) => ({
        fetchTasks: build.query<{items: TaskType[]}, string>({
            query: (id: string) => ({
                url: `todo-lists/${id}/tasks`,
                headers: {
                    'API-KEY': 'a2db3bdd-9ae5-4fe8-ae61-677aa64cba58'
                }
            }),
            providesTags: result => ['Tasks']
        }),
        createTask: build.mutation<{ item: TodoListType }, { title: string }>({
            query: (body) => ({
                url: 'todo-lists',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Tasks']
        }),
        updateTask: build.mutation({
            query: (body) => ({
                url: `todo-lists/${body.id}`,
                method: 'PUT',
                body: { title: body.title }
            }),
            invalidatesTags: ['Tasks']
        }),
        deleteTask: build.mutation({
            query: (body) => ({
                url: `todo-lists/${body.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Tasks']
        }),
    })
})