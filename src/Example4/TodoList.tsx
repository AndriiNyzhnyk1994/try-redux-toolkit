import React, { ChangeEvent, useState } from 'react'
import { FilterValuesType, TaskType } from './App4'
import { AddItemForm } from './utils/AddItemForm'

type PropsType = {
    title: string
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
        props.addTask(title)
    }
    
    const onAllHandler = () => {
        props.changeFilter('all')        
    }
    
    const onActiveHandler = () => {
        props.changeFilter('active')        
    }
     
    const onCompletedHandler = () => {
        props.changeFilter('completed')        
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <AddItemForm addItem={addTaskHandler}/>
            <ul>
                {
                    props.tasks.map(t => {
                        const removeTaskHandler = () => {
                            props.removeTask(t.taskId)
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
