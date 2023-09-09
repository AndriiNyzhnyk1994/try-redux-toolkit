import React from 'react'
import { TodoItem } from './TodoItem'
import { useAppSelector } from '../hook'



export const Todolist: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list)

    return (
        <ul>
            {
                todos.map((t) => {
                    return (
                        <TodoItem
                            key={t.id}
                            {...t}
                        />
                    )
                })
            }
        </ul>
    )
}
