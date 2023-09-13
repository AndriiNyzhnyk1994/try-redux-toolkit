import React, { useState } from 'react'
import { v1 } from 'uuid'
import { TodoList } from './TodoList'


export type TaskType = {
    taskId: string
    title: string
    isDone: boolean
}
export type FilterValuesType = 'all' | 'active' | 'completed'


export function App4() {
    const [filter, setFilter] = useState<FilterValuesType>('all')
    const [tasks, setTasks] = useState<TaskType[]>([
        { taskId: v1(), title: 'Wolfenstein', isDone: true },
        { taskId: v1(), title: 'Wolfenstein 2', isDone: true },
        { taskId: v1(), title: 'Wolfenstein 3', isDone: true },
        { taskId: v1(), title: 'Doom 3', isDone: false },
    ])

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.taskId !== taskId))
    }
    const addTask = (newTaskTitle: string) => {
        const newTask: TaskType = { taskId: v1(), title: newTaskTitle, isDone: false }
        setTasks([newTask, ...tasks])
    }
    const changeTaskTitle = (taskId: string, newTitle: string) => {
        let task = tasks.find(t => t.taskId === taskId)
        if (task && newTitle.trim()) {
            task.title = newTitle
            setTasks(tasks)
        }
    }
    const changeTaskStatus = (taskId: string, status: boolean) => {
        const changedTasks = tasks.map(t => {
            if (t.taskId === taskId) {
                return { ...t, isDone: status }
            }
            return t
        })
        setTasks(changedTasks)
    }

    let tasksForTodoList = tasks
    if (filter === 'active') {
        tasksForTodoList = tasks.filter(t => !t.isDone)
    }
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(t => t.isDone)
    }

    return (
        <div>
            <h1>Example 4</h1>
            <TodoList
                title={'Games'}
                filter={filter}
                changeFilter={changeFilter}
                tasks={tasksForTodoList}
                removeTask={removeTask}
                addTask={addTask}
                changeTaskTitle={changeTaskTitle}
                changeTaskStatus={changeTaskStatus}
            />
        </div>
    )
}
