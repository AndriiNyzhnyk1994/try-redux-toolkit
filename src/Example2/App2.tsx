import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { userSlice } from './store/reducers/UserSlice'
import { fetchUsers } from './store/reducers/ActionCreators'
import { PostsContainer } from './components/PostsContainer'
import { PostsContainer2 } from './components/PostsContainer2'

export function App2() {
    const { users, count, isLoading, error } = useAppSelector(state => state.userReducer)

    const { increment } = userSlice.actions
    // it's a way how we can to take our actions from userSlice

    const dispatch = useAppDispatch()

    // increment(5) returns typical action (an object with necessary preperties)
    // {payload: 5, type: 'user/increment'} 


    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>

            <div style={{display: 'flex', textAlign: 'center', padding: '5px'}}>
                <PostsContainer />
                <PostsContainer2 />
            </div>

            {/* {isLoading && <h1>LOADING...</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)} */}

            {/* <div>
                <h1>{count}</h1>
                <button onClick={() => dispatch(increment(5))}>INCREMENT</button>
            </div> */}
        </div>
    )
}
