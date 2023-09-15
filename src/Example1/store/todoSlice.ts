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
    async function (_, {rejectWithValue}) {
        // the 1-st parameter of async function is any data,
        // that we can pass as arguments when we calling fetchTodos()
        // we did it in useEffect inside App1 component
        // if we have nothing to pass in call of fetchTodos()
        // we should write `_` symbol as 1-st parameter (without brackets)

        // 2-nd parameter is the object with configurations
        // it has some prop-s, like getState,
        // rejectWithValue, fullfillWithValue ect.
        // now we use rejectWithValue. 
        // It allows us to place the error info to fetchTodos.rejected
        // error info will be stored in action.payload 
        // inside fetchTodos.rejected extraReducer

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
            
            if(!response.ok) {
                throw new Error('Something went wrong')
            }

            const data = await response.json()
            return data
        } catch(error: any | {message?: string} ) {
            return rejectWithValue(error.message)
        }
        
    }
)


export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function( id: string, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE'
            })
            if(!response.ok) {
                throw new Error('Cannot delete task. Server error.')
            }
            dispatch(removeTodo({id} as any))

        } catch (error: any | {message?: string}) {
            return rejectWithValue(error.message)
        }
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
        removeTodo(state, action: PayloadAction<{id: string}>) {
            state.list = state.list.filter(t => t.id !== action.payload.id)
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
            state.status = 'loading'
            if (state.error) {
                state.error = null
            }
        },
        [fetchTodos.fulfilled.type]: (state, action) => {
            state.status = 'resolved'
            state.list = action.payload
        },
        [fetchTodos.rejected.type]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
         },
         
    }
})

export const { addTodo, removeTodo, changeTodoStatus } = todoSlice.actions
export default todoSlice.reducer