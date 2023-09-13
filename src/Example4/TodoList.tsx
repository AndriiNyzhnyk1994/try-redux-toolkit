import React, { ChangeEvent, useState } from 'react'
import { FilterValuesType, TaskType } from './App4'
import { AddItemForm } from './utils/AddItemForm'

type PropsType = {
    title: string
    id: string
    tasks: TaskType[]
    filter: FilterValuesType
    changeFilter: (todoListId: string, value: FilterValuesType) => void
    removeTask: (todoListId: string, taskId: string) => void
    addTask: (todoListId: string, newTaskTitle: string) => void
    changeTaskStatus: (todoListId: string, taskId: string, status: boolean) => void
    changeTaskTitle: (todoListId: string, taskId: string, newTitle: string) => void
}


export function TodoList(props: PropsType) {
    
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
            <h2>{props.title}</h2>
            <AddItemForm addItem={addTaskHandler}/>
            <ul>
                {
                    props.tasks.map(t => {
                        const removeTaskHandler = () => {
                            props.removeTask(props.id, t.taskId)
                        }
                        return (
                            <li key={t.taskId}>
                                <input type="checkbox" checked={t.isDone} />
                                <span>{t.title}</span>
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
