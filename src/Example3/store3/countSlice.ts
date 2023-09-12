import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<{incValue: number}>) {
            state.count = state.count + action.payload.incValue
        }
    }
})

export const {increment} = countSlice.actions

export default countSlice.reducer

