import { PayloadAction, createSlice } from "@reduxjs/toolkit";



const initialState = {
    count: 0
}

const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count = state.count + action.payload
        }
    }
})

export const {increment} = countSlice.actions

export default countSlice.reducer

