import React, { useState } from 'react'
import { v1 } from 'uuid'
import { TodoList } from './TodoList'


export type TaskType = {
    taskId: string
    title: string
    isDone: boolean
}


export function App4() {

    const [tasks, setTasks] = useState<TaskType[]>([
        { taskId: v1(), title: 'Wolfenstein', isDone: true },
        { taskId: v1(), title: 'Wolfenstein 2', isDone: true },
        { taskId: v1(), title: 'Wolfenstein 3', isDone: true },
        { taskId: v1(), title: 'Doom 3', isDone: false },
    ])

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.taskId !== taskId))
    }



    return (
        <div>
            <h1>Example 4</h1>
            <TodoList 
                title={'Games'}
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    )
}
