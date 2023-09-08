import React from 'react'
import { ToDoType } from '../App'

type PropsType = ToDoType & {
    removeTodo: (todoId: string) => void
    changeTodoStatus: (todoId: string, status: boolean) => void
}

export function TodoItem({ id, title, completed, ...restProps }: PropsType) {
    return (
        <li key={id}>
            <input
                type="checkbox"
                checked={completed}
                onChange={(e) => { restProps.changeTodoStatus(id, e.currentTarget.checked) }} />
            <span>{title}</span>
            <span onClick={() => restProps.removeTodo(id)} className='deleter'>&times;</span>
        </li>
    )
}

