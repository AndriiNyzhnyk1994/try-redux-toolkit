import { v1 } from "uuid";
import { FilterValuesType, TaskType, TasksStateType, TodoListType } from "../App4";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addTodoListAC, removeTodoListAC } from "./todoListsSlice";
import { fetchTodoLists } from "./ActionCreators";



const initialState: TasksStateType = {}
 
const todoListsSlice = createSlice({
    name: 'todoLists',
    initialState,
    reducers: {
        removeTaskAC(state, action: PayloadAction<{ todoListId: string, taskId: string }>) {
            let todoListTasks = state[action.payload.todoListId]
            state[action.payload.todoListId] = todoListTasks.filter(t => t.taskId !== action.payload.taskId)
        },
        addTaskAC(state, action: PayloadAction<{ todoListId: string, newTaskTitle: string }>) {
            let todoListTasks = state[action.payload.todoListId]
            const newTask: TaskType = { taskId: v1(), title: action.payload.newTaskTitle, isDone: false }
            state[action.payload.todoListId] = [newTask, ...todoListTasks]
        },
        changeTaskTitleAC(state, action: PayloadAction<{ todoListId: string, taskId: string, newTitle: string }>) {
            let todoListTasks: TaskType[] = state[action.payload.todoListId]
            let task = todoListTasks.find(t => t.taskId === action.payload.taskId)
            if (task) {
                task.title = action.payload.newTitle
            }
        },
        changeTaskStatusAC(state, action: PayloadAction<{ todoListId: string, taskId: string, status: boolean }>) {
            let todoListTasks: TaskType[] = state[action.payload.todoListId]
            state[action.payload.todoListId] = todoListTasks.map(t => {
                if (t.taskId === action.payload.taskId) {
                    return { ...t, isDone: action.payload.status }
                }
                return t
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(removeTodoListAC,
                (state, action: PayloadAction<{ todoListId: string }>) => {
                    delete state[action.payload.todoListId]
                }
            )
            .addCase(addTodoListAC,
                (state, action: PayloadAction<{ newTodoId: string, newTodoTitle: string }>) => {
                    state[action.payload.newTodoId] = []
                })
            
    }
})

export const {
    addTaskAC,
    removeTaskAC,
    changeTaskTitleAC,
    changeTaskStatusAC } = todoListsSlice.actions


export default todoListsSlice.reducer