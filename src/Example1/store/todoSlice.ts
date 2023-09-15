import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoType } from "../App1";



type TodosState = {
    list: ToDoType[]
}

const initialState: TodosState = {
    list: [],
}


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
            if(todo) {
                todo.completed = !todo.completed
            }
        }
    }
})

export const {addTodo, removeTodo, changeTodoStatus} = todoSlice.actions
export default todoSlice.reducer