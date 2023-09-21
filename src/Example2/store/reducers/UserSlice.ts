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
        // Before, when we created fetchUsers by `createAsyncThunk`,
        // fetchUsers have got automatically a special prorerties:
        // (pending, fulfilled, rejected) 
        // and while we do a request on the server, it's properties 
        // work like lifecycle method in React Components
        // so we can handle any logic while any stage of request-responce process
        // Below we created a few extra reducers, that will be called 
        // when we will dispatch fetchUsers thunk
 
        // [fetching.pending.type] === 'user/fetchAll/pending'
        
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
            // payload usually is the object
            // in this case payload === data that we returned from fetchUsers
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})


export default userSlice.reducer