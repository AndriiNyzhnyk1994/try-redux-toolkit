import React, { ChangeEvent, useState } from 'react'
import { FilterValuesType, TaskType } from './App4'
import { AddItemForm } from './utils/AddItemForm'
import { EditableSpan } from './utils/EditableSpan'

type PropsType = {
    title: string
    id: string
    tasks: TaskType[]
    filter: FilterValuesType
    addTodoList: (newTodoTitle: string) => void
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
        props.changeFilter(props.id,'active')        
    }
     
    const onCompletedHandler = () => {
        props.changeFilter(props.id, 'completed')        
    }
    
    return (
        <div>
            <button onClick={removeTodoListHandler}>x</button>
            <h2>
                <EditableSpan title={props.title} changeTitle={changeTodoListTitleHandler}/>
            </h2>
            <AddItemForm addItem={addTaskHandler}/>
            <ul>
                {
                    props.tasks.map(t => {
                        const removeTaskHandler = () => {
                            props.removeTask(props.id, t.taskId)
                        }
                        const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(props.id, t.taskId, e.currentTarget.checked)
                        }
                        const changeTaskTitle = (value: string) => {
                            props.changeTaskTitle(props.id, t.taskId, value)
                        }
                        return (
                            <li key={t.taskId}>
                                <input type="checkbox" checked={t.isDone} onChange={changeTaskStatus} />
                                <EditableSpan changeTitle={changeTaskTitle} title={t.title}/>
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
