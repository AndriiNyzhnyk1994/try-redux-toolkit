import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                comoleted: false,
                title: action.payload.text
            })          
        },
        removeTodo() {},
        changeTodoStatus() {}
    }
})

export const {addTodo, removeTodo, changeTodoStatus} = todoSlice.actions
export default todoSlice.reducer