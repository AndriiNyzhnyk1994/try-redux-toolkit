import React from 'react'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { userSlice } from './store/reducers/UserSlice'

export function App2() {
    const { count } = useAppSelector(state => state.userReducer)

    const { increment } = userSlice.actions
    // it's a way how we can to take our actions from userSlice

    const dispatch = useAppDispatch()

    // increment(5) returns typical action (an object with necessary preperties)
    // {payload: 5, type: 'user/increment'} 
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment(5))}>INCREMENT</button>
        </div>
    )
}
