import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TodoListType } from "../App4";
import { TaskType } from "../models";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a2db3bdd-9ae5-4fe8-ae61-677aa64cba58'
    }
})

export const fetchTodoLists = createAsyncThunk(
    'todoLists/fetchTodoLists',
    async (_, thunkAPI) => {
        try {
          const response = await instance.get<TodoListType[]>('todo-lists')
            
            
          return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong')
        }
    }
)


export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (todolistId: string, thunkAPI) => {
        try {
          const response = await instance.get<GetTasksResponseType>(`/todo-lists/${todolistId}/tasks`) 
          
          return response.data.items
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong')
        }
    }
)


export type GetTasksResponseType = {
    items: TaskType[]
    totalCount: number
    error: string | null
}

