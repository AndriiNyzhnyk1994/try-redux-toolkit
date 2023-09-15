import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoType } from "../App1";



type TodosState = {
    list: ToDoType[]
    status: null | string
    error: null | string
}

const initialState: TodosState = {
    list: [],
    status: null,
    error: null
}

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    // we should name this thunk as redecers' actions named.
    // they named automaticaly in reducers based on methods' names,
    // and here we must create name with the same style like reducer does,
    // but manually
    async function () {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
            
            if(!response.ok) {
                throw new Error('Something went wrong')
            }

            const data = await response.json()
            return data
        } catch(error) {}
        
    }
)


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                completed: false,
                title: action.payload
            })
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(t => t.id !== action.payload)
        },
        changeTodoStatus(state, action: PayloadAction<string>) {
            const todo = state.list.find(t => t.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        }
    },
    extraReducers: {
        [fetchTodos.pending.type]: (state) => {
            state.status = 'loading...'
            if (state.error) {
                state.error = null
            }
        },
        [fetchTodos.fulfilled.type]: (state, action) => {
            state.status = 'resolved'
            state.list = action.payload
        },
        [fetchTodos.rejected.type]: (state, action) => { },
    }
})

export const { addTodo, removeTodo, changeTodoStatus } = todoSlice.actions
export default todoSlice.reducer