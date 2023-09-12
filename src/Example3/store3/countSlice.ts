import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.count + 1
        }
    }
})

export const {increment} = countSlice.actions

export default countSlice.reducer

