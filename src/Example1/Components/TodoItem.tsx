import React from 'react'
import { ToDoType } from '../App1'
import { useAppDispatch } from '../hook'
import { changeTodoStatus, deleteTodo } from '../store/todoSlice'


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
                onClick={() => dispatch( deleteTodo(id) )}
                className='deleter'>&times;</span>
        </li>
    )
}

