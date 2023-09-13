import React, { useState } from 'react'
import { v1 } from 'uuid'
import { TodoList } from './TodoList'


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
    const [filter, setFilter] = useState<FilterValuesType>('all')

    const todoListId01 = v1()
    const todoListId02 = v1()

    const [todoLists, setTodoLists] = useState<TodoListType[]>([
        { todoListId: todoListId01, title: 'Games', filter: 'all' },
        { todoListId: todoListId02, title: 'Movies', filter: 'all' },
    ])

    const [tasks, setTasks] = useState<TasksStateType>({
        [todoListId01]: [
            { taskId: v1(), title: 'Wolfenstein', isDone: true },
            { taskId: v1(), title: 'Wolfenstein 2', isDone: true },
            { taskId: v1(), title: 'Wolfenstein 3', isDone: true },
            { taskId: v1(), title: 'Doom 3', isDone: false },
        ],
        [todoListId02]: [
            { taskId: v1(), title: 'Drive', isDone: true },
            { taskId: v1(), title: 'Taxi driver', isDone: false },
            { taskId: v1(), title: 'Dark Knight', isDone: true },
            { taskId: v1(), title: 'Wednesday', isDone: false },
        ],
    }
    )

    const removeTodoList = (todoListId: string) => {
        setTodoLists(todoLists.filter(tl => tl.todoListId !== todoListId))
        delete tasks[todoListId]
    }


    const changeFilter = (todoListId: string, value: FilterValuesType) => {
        let todoList = todoLists.find(tl => tl.todoListId === todoListId)
        if (todoList) {
            todoList.filter = value
            setTodoLists([...todoLists])
        }
    }
    const removeTask = (todoListId: string, taskId: string) => {
        let todoListTasks = tasks[todoListId]
        tasks[todoListId] = todoListTasks.filter(t => t.taskId !== taskId)
        setTasks({ ...tasks })
    }
    const addTask = (todoListId: string, newTaskTitle: string) => {
        let todoListTasks = tasks[todoListId]
        const newTask: TaskType = { taskId: v1(), title: newTaskTitle, isDone: false }
        tasks[todoListId] = [newTask, ...todoListTasks]
        setTasks({ ...tasks })
    }
    const changeTaskTitle = (todoListId: string, taskId: string, newTitle: string) => {
        let todoListTasks = tasks[todoListId]
        let task = todoListTasks.find(t => t.taskId === taskId)
        if (task && newTitle.trim()) {
            task.title = newTitle
            setTasks(tasks)
        }
    }
    const changeTaskStatus = (todoListId: string, taskId: string, status: boolean) => {
        let todoListTasks = tasks[todoListId]
        tasks[todoListId] = todoListTasks.map(t => {
            if (t.taskId === taskId) {
                return { ...t, isDone: status }
            }
            return t
        })
        setTasks({ ...tasks })
    }


    return (
        <div>
            <h1>Example 4</h1>
            {
                todoLists.map(tl => {

                    let tasksForTodoList = tasks[tl.todoListId]
                    if (filter === 'active') {
                        tasksForTodoList = tasks[tl.todoListId].filter(t => !t.isDone)
                    }
                    if (filter === 'completed') {
                        tasksForTodoList = tasks[tl.todoListId].filter(t => t.isDone)
                    }
                    return (
                        <TodoList
                            id={tl.todoListId}
                            title={tl.title}
                            filter={tl.filter}
                            removeTodoList={removeTodoList}
                            changeFilter={changeFilter}
                            tasks={tasksForTodoList}
                            removeTask={removeTask}
                            addTask={addTask}
                            changeTaskTitle={changeTaskTitle}
                            changeTaskStatus={changeTaskStatus}
                        />
                    )
                })
            }

        </div>
    )
}
