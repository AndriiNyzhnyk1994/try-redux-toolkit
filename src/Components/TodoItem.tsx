import React from 'react'
import { ToDoType } from '../App'
import { useAppDispatch } from '../hook'
import { changeTodoStatus, removeTodo } from '../store/todoSlice'


type PropsType = ToDoType 
export const TodoItem: React.FC<PropsType> = ({ id, title, completed }) => {

    const dispatch = useAppDispatch()


    return (
        <li key={id}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(changeTodoStatus(id))} />
            <span>{title}</span>
            <span
                onClick={() => dispatch(removeTodo(id))}
                className='deleter'>&times;</span>
        </li>
    )
}

