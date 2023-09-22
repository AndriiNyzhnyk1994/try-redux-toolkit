import { v1 } from "uuid";
import { FilterValuesType, TasksStateType, TodoListType } from "../App4";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addTodoListAC, removeTodoListAC } from "./todoListsSlice";
import { fetchTasks, fetchTodoLists } from "./ActionCreators";
import { TaskType } from "../models";



const initialState: TasksStateType = {}
 
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        removeTaskAC(state, action: PayloadAction<{ todoListId: string, taskId: string }>) {
            let todoListTasks = state[action.payload.todoListId]
            state[action.payload.todoListId] = todoListTasks.filter(t => t.id !== action.payload.taskId)
        },
        addTaskAC(state, action: PayloadAction<{ todoListId: string, newTaskTitle: string }>) {
            let todoListTasks = state[action.payload.todoListId]
            const newTask: TaskType = { id: v1(), title: action.payload.newTaskTitle, status: 0 }
            state[action.payload.todoListId] = [newTask, ...todoListTasks]
        },
        changeTaskTitleAC(state, action: PayloadAction<{ todoListId: string, taskId: string, newTitle: string }>) {
            let todoListTasks: TaskType[] = state[action.payload.todoListId]
            let task = todoListTasks.find(t => t.id === action.payload.taskId)
            if (task) {
                task.title = action.payload.newTitle
            }
        },
        changeTaskStatusAC(state, action: PayloadAction<{ todoListId: string, taskId: string, status: boolean }>) {
            let todoListTasks: TaskType[] = state[action.payload.todoListId]
            state[action.payload.todoListId] = todoListTasks.map(t => {
                if (t.id === action.payload.taskId) {
                    return { ...t, isDone: action.payload.status }
                }
                return t
            })
        }
    },
    extraReducers: {
            [removeTodoListAC.type]: (state, action: PayloadAction<{ todoListId: string }>) => {
                    delete state[action.payload.todoListId]
                },
            [addTodoListAC.type]: (state, action: PayloadAction<{ newTodoId: string, newTodoTitle: string }>) => {
                state[action.payload.newTodoId] = []
            },
            [fetchTasks.fulfilled.type]: (state, action: PayloadAction<TaskType[]>) => {
                
            } }
})

export const {
    addTaskAC,
    removeTaskAC,
    changeTaskTitleAC,
    changeTaskStatusAC } = tasksSlice.actions


export default tasksSlice.reducer