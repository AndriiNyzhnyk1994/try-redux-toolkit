import React, { ChangeEvent, useState } from 'react'
import { FilterValuesType, TaskType } from './App4'
import { AddItemForm } from './utils/AddItemForm'

type PropsType = {
    title: string
    tasks: TaskType[]
    filter: FilterValuesType
    changeFilter: (value: FilterValuesType) => void
    removeTask: (taskId: string) => void
    addTask: (newTaskTitle: string) => void
    changeTaskStatus: (taskId: string, status: boolean) => void
    changeTaskTitle: (taskId: string, newTitle: string) => void
}


export function TodoList(props: PropsType) {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<null | string>(null)

    const addTaskHandler = () => {
        props.addTask(title)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        if(error) {
            setError(null)
        } 
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
