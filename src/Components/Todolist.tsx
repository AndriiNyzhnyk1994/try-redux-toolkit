import React from 'react'
import { ToDoType } from '../App'
import { TodoItem } from './TodoItem'

type PropsType = {
    todos: ToDoType[]
    removeTodo: (todoId: string) => void
    changeTodoStatus: (todoId: string, status: boolean) => void
}

export function Todolist({ todos, ...restProps }: PropsType) {
    return (
        <ul>
            {
                todos.map((t) => {
                    return (
                        <TodoItem
                            key={t.id}
                            id={t.id}
                            title={t.title}
                            completed={t.completed}
                            removeTodo={restProps.removeTodo}
                            changeTodoStatus={restProps.changeTodoStatus}
                        />
                    )
                })
            }
        </ul>
    )
}
