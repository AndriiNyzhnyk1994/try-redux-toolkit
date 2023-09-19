import { v1 } from "uuid";
import { FilterValuesType, TodoListType } from "../App4";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchTodoLists } from "./ActionCreators";

type InitialStateType = {
    todoLists: TodoListType[]
}
 
const initialState: InitialStateType = {
    todoLists: []
}

const todoListsSlice = createSlice({
    name: 'todoLists',
    initialState,
    reducers: {
        removeTodoListAC(state, action: PayloadAction<{ todoListId: string }>) {
            state.todoLists = state.todoLists.filter(tl => tl.id !== action.payload.todoListId)
        },
        addTodoListAC(state, action: PayloadAction<{ newTodoId: string, newTodoTitle: string }>) {
            const newTodoList: TodoListType = {
                id: action.payload.newTodoId,
                title: action.payload.newTodoTitle,
                filter: 'all'
            }
            state.todoLists = [newTodoList, ...state.todoLists]
        },
        changeTodoListTitleAC(state, action: PayloadAction<{ todoListId: string, newTitle: string }>) {
            state.todoLists = state.todoLists.map(tl => {
                if (tl.id === action.payload.todoListId) {
                    return { ...tl, title: action.payload.newTitle }
                }
                return tl
            })
        },
        changeFilterAC(state, action: PayloadAction<{ todoListId: string, value: FilterValuesType }>) {
            let todoList = state.todoLists.find(tl => tl.id === action.payload.todoListId)
            if (todoList) {
                todoList.filter = action.payload.value
            }
        }
    },
    extraReducers: {
        [fetchTodoLists.fulfilled.type]: (state, action: PayloadAction<TodoListType[]>) => {
            state.todoLists = action.payload   
        },
         
    }
})

export const {
    addTodoListAC,
    removeTodoListAC,
    changeTodoListTitleAC,
    changeFilterAC, } = todoListsSlice.actions


export default todoListsSlice.reducer