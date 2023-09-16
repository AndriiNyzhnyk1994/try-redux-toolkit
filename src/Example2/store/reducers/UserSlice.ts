import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../models/IUser"
import { fetchUsers } from "./ActionCreators"

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
        // userFetching(state) {
        //     state.isLoading = true
        // },
        // userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false
        //     state.error = ''
        //     state.users = action.payload
        // },
        // userFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false
        //     state.error = action.payload
        // },

        // now this reducers are unnecessary because
        // we have extraReducers with the same logic
        
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload
        },
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
            // payload usually is the object
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})


export default userSlice.reducer