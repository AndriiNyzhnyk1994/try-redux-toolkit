import React from 'react'
import { useAppSelector3, useAppDispatch } from './store3/store3'
import { increment } from './store3/countSlice'
import { addUser } from './store3/usersSlice'

export default function App3() {

    const count = useAppSelector3(state => state.countReducer.count)
    const users = useAppSelector3(state => state.usersReducer.users)
    const dispatch = useAppDispatch()

    const incrementCount = () => {
        dispatch(increment(1))
        console.log('clicked');
    }

    const usersTable = users.map((u, index) => {
        return (<li key={index}>
            <span>{index + 1}. </span>
            <span>name: {u.name}, </span>
            <span>age: {u.age}</span>
        </li>)
    })

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>INC</button>
            <ul>{usersTable}</ul>
        </div>
    )
}
