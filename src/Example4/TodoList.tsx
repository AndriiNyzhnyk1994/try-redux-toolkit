import React, { ChangeEvent, useEffect, useState } from 'react'
import { FilterValuesType, TasksStateType } from './App4'
import { AddItemForm } from './utils/AddItemForm'
import { EditableSpan } from './utils/EditableSpan'
import { useAppDispatch4, useAppSelector4 } from './store4/hooks'
import { fetchTasks } from './store4/ActionCreators'
import { tasksAPI } from './services/tasksService'

type PropsType = {
    title: string
    id: string
    filter: FilterValuesType
    updateTodoList: (id: string, title: string) => void
    deleteTodoListRTK: (id: string) => void
    removeTodoList: (todoListId: string) => void
    changeTodoListTitle: (todoListId: string, newTitle: string) => void
    changeFilter: (todoListId: string, value: FilterValuesType) => void
    removeTask: (todoListId: string, taskId: string) => void
    addTask: (todoListId: string, newTaskTitle: string) => void
    changeTaskStatus: (todoListId: string, taskId: string, status: boolean) => void
    changeTaskTitle: (todoListId: string, taskId: string, newTitle: string) => void
}

 
export function TodoList(props: PropsType) {

    const removeTodoListHandler = () => {
        props.removeTodoList(props.id)
    }

    const changeTodoListTitleHandler = (newTitle: string) => {
        props.changeTodoListTitle(props.id, newTitle)
    }

    const addTaskHandler = (title: string) => {
        props.addTask(props.id, title)
    }

    const onAllHandler = () => {
        props.changeFilter(props.id, 'all')
    }

    const onActiveHandler = () => {
        props.changeFilter(props.id, 'active')
    }

    const onCompletedHandler = () => {
        props.changeFilter(props.id, 'completed')
    }


    const tasks: TasksStateType = useAppSelector4(state => state.tasksReducer)
    const dispatch = useAppDispatch4()

    let tasksForTodoList = tasks[props.id]
    if (props.filter === 'active') {
        tasksForTodoList = tasks[props.id].filter(t => t.status)
    }
    if (props.filter === 'completed') {
        tasksForTodoList = tasks[props.id].filter(t => !t.status)
    }

    // _______________________Functions by RTK Query_______________________

    const onUpdateTodoList = (title: string) => {
        props.updateTodoList(props.id, title )
    }
    const onDeleteTodoList = () => {
        props.deleteTodoListRTK(props.id)
    }
    const {data: tasksData} = tasksAPI.useFetchTasksQuery(props.id)
    


    // _________________________useEffect________________________________ 

    // useEffect(() => {

    //     dispatch(fetchTasks(props.id))
    // }, [])


    return (
        <div>
            <button onClick={onDeleteTodoList}>x</button>
            <h2>
                <EditableSpan title={props.title} changeTitle={onUpdateTodoList} />
            </h2>
            <AddItemForm addItem={addTaskHandler} />
            <ul>
                {
                  tasksData && tasksData.items.map(t => {
                        const removeTaskHandler = () => {
                            props.removeTask(props.id, t.id)
                        }
                        const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(props.id, t.id, e.currentTarget.checked)
                        }
                        const changeTaskTitle = (value: string) => {
                            props.changeTaskTitle(props.id, t.id, value)
                        }
                        return (
                            <li key={t.id}>
                                <input type="checkbox" checked={!!t.status} onChange={changeTaskStatus} />
                                <EditableSpan changeTitle={changeTaskTitle} title={t.title} />
                                <button onClick={removeTaskHandler}>x</button>
                            </li>
                        )
                    })
                }

            </ul>
            <div>
                <button onClick={onAllHandler}>All</button>
                <button onClick={onActiveHandler}>Active</button>
                <button onClick={onCompletedHandler}>Completed</button>
            </div>
        </div>
    )
}
