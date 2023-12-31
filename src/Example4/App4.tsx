import React, { useEffect, useState } from 'react'
import { v1 } from 'uuid'
import { TodoList } from './TodoList'
import { AddItemForm } from './utils/AddItemForm'
import { addTodoListAC, changeFilterAC, changeTodoListTitleAC, removeTodoListAC } from './store4/todoListsSlice'
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from './store4/tasksSlice'
import { fetchTodoLists } from './store4/ActionCreators'
import { useAppDispatch4, useAppSelector4 } from './store4/hooks'
import { AppDispatchType4 } from './store4/store4'
import axios from 'axios'
import { todoListsAPI } from './services/todoListsService'
import { tasksAPI } from './services/tasksService'
import { TaskType } from './models'



export type FilterValuesType = 'all' | 'active' | 'completed'
export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type TasksStateType = {
    [key: string]: TaskType[]
}


export function App4() {
    //const todoLists: TodoListType[] = useAppSelector4(state => state.todoListsReducer.todoLists)

    const {data: todoListsData} = todoListsAPI.useFetchTodoListsQuery(10)
    

    const [deleteTodoListRTK, {}] = todoListsAPI.useDeleteTodoListMutation()
    const [updateTodoListRTK, {}] = todoListsAPI.useUpdateTodoListMutation()
    const [addTodoListRTK, {}] = todoListsAPI.useCreateTodoListMutation()

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

    // useEffect(() => {
    //     dispatch(fetchTodoLists())
    // },[])


const handleAddTodoList = async (title: string) => {
    await addTodoListRTK({title})
}
const handleUpdateTodoList = async (id: string, title: string) => {
    await updateTodoListRTK({id, title})
}
const handleDeleteTodoList = async (id: string) => {
    await deleteTodoListRTK({id})
}


    return (
        <div style={{textAlign: 'center'}}>
            <h1>Example 4</h1>
            <AddItemForm addItem={handleAddTodoList} />
            {         
                todoListsData && todoListsData.map(tl => {
                    
                    return (
                        <div key={tl.id}>
                            <TodoList
                                id={tl.id}
                                title={tl.title}
                                filter={'all'}
                                removeTodoList={removeTodoList}
                                changeTodoListTitle={changeTodoListTitle}
                                changeFilter={changeFilter}
                                removeTask={removeTask}
                                addTask={addTask}
                                changeTaskTitle={changeTaskTitle}
                                changeTaskStatus={changeTaskStatus}
                                updateTodoList={handleUpdateTodoList}
                                deleteTodoListRTK={handleDeleteTodoList}
                            />
                        </div>

                    )
                })
            }

        </div>
    )
}
