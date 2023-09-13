import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addUser } from "./usersSlice";



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
    },
    extraReducers: (builder) => {
        builder.addCase(addUser, (state, action) => {
            state.count = state.count + 2
        })
        // it's stupid but it's just a test of extraReducer
        // now, if we dispatched addUser, count value will be increased by 2
    }
})

export const {increment} = countSlice.actions

export default countSlice.reducer

