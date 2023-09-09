import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../models/IUser"

interface UserState {
    users: IUser[]
    isLoading: boolean
    error: string
}


const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}

// early we used reducers but now in the toolkit they called as Slices

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export default userSlice.reducer