import React, { useEffect, useState } from 'react'
import { v1 } from 'uuid'
import { TodoList } from './TodoList'
import { AddItemForm } from './utils/AddItemForm'
import { addTodoListAC, changeFilterAC, changeTodoListTitleAC, removeTodoListAC } from './store4/todoListsSlice'
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from './store4/tasksSlice'
import { fetchTodoLists } from './store4/ActionCreators'
import { useAppDispatch4, useAppSelector4 } from './store4/hooks'


export type TaskType = {
    taskId: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'
export type TodoListType = {
    todoListId: string
    title: string
    filter: FilterValuesType
}
export type TasksStateType = {
    [key: string]: TaskType[]
}


export function App4() {

    const todoLists: TodoListType[] = useAppSelector4(state => state.todoListsReducer.todoLists)
    const tasks: TasksStateType = useAppSelector4(state => state.tasksReducer)
    const dispatch = useAppDispatch4()
    

// _______________________ TodoList functions _________________________________
    const addTodoList = (newTodoTitle: string) => {
        dispatch(addTodoListAC({ newTodoTitle: newTodoTitle, newTodoId: v1() }))
    }
    const removeTodoList = (todoListId: string) => {
        dispatch(removeTodoListAC({ todoListId }))
    }
    const changeTodoListTitle = (todoListId: string, newTitle: string) => {
        dispatch(changeTodoListTitleAC({ todoListId, newTitle }))
    }
    const changeFilter = (todoListId: string, value: FilterValuesType) => {
        dispatch(changeFilterAC({ todoListId, value }))
    }


// _______________________ Tasks functions ____________________________________
    const removeTask = (todoListId: string, taskId: string) => {
        dispatch(removeTaskAC({todoListId, taskId}))
    }
    const addTask = (todoListId: string, newTaskTitle: string) => {
        dispatch(addTaskAC({todoListId, newTaskTitle}))
    }
    const changeTaskTitle = (todoListId: string, taskId: string, newTitle: string) => {
        dispatch(changeTaskTitleAC({todoListId, taskId, newTitle}))
    }
    const changeTaskStatus = (todoListId: string, taskId: string, status: boolean) => {
        dispatch(changeTaskStatusAC({todoListId, taskId, status}))
    }
// __________________________useEffect______________________________________


    useEffect(() => {
        
        dispatch(fetchTodoLists())
    },[])

   

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Example 4</h1>
            <AddItemForm addItem={addTodoList} />
            {
                todoLists.map(tl => {
                    let tasksForTodoList = tasks[tl.todoListId]
                    if (tl.filter === 'active') {
                        tasksForTodoList = tasks[tl.todoListId].filter(t => !t.isDone)
                    }
                    if (tl.filter === 'completed') {
                        tasksForTodoList = tasks[tl.todoListId].filter(t => t.isDone)
                    }
                    return (
                        <div key={tl.todoListId}>
                            <TodoList
                                id={tl.todoListId}
                                title={tl.title}
                                filter={tl.filter}
                                removeTodoList={removeTodoList}
                                changeTodoListTitle={changeTodoListTitle}
                                changeFilter={changeFilter}
                                tasks={tasksForTodoList}
                                removeTask={removeTask}
                                addTask={addTask}
                                changeTaskTitle={changeTaskTitle}
                                changeTaskStatus={changeTaskStatus}
                            />
                        </div>

                    )
                })
            }

        </div>
    )
}
