import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../models/IUser"

interface UserState {
    users: IUser[]
    isLoading: boolean
    error: string
    count: number
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0,
}

// early we used reducers but now in the toolkit they called as Slices
// slice stores action creators and reducers
// now we needn't to create action creators ourselves

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            console.log(state.count);
            state.count += action.payload
        }
    }
})

export default userSlice.reducer