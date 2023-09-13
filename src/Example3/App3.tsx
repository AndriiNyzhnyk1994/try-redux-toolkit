import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from './store3/store3'
import { increment } from './store3/countSlice'

export default function App3() {

    const count = useAppSelector(state => state.countReducer.count)
    const users = useAppSelector(state => state.usersReducer)
    const dispatch = useAppDispatch()

    const incrementCount = () => {
        dispatch(increment({incValue: 4}))
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>INC</button>
        </div>
    )
}
