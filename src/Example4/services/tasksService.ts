import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { TaskType } from "../models";

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
        createTask: build.mutation<{ item: TaskType }, { title: string, todoListId: string }>({
            query: (body) => ({
                url: `todo-lists/${body.todoListId}/tasks`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Tasks']
        }),
        updateTask: build
        .mutation<{ item: TaskType }, TaskType>({
            query: (body) => ({
                url: `todo-lists/${body.todoListId}/tasks/${body.id}`,
                method: 'PUT',
                body: {...body, title: body.title, status: body.status }
            }),
            invalidatesTags: ['Tasks']
        }),
        deleteTask: build.mutation<{}, TaskType>({
            query: (body) => ({
                url: `todo-lists/${body.todoListId}/tasks/${body.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Tasks']
        }),
    })
})