import axios from "axios";
import { AppDispatchType } from "../store2";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";



// export const fetchUsers = () => async (dispatch: AppDispatchType) => {
//     try {
//         dispatch(userSlice.actions.userFetching())
//         // ▲ ▲ ▲ changed isLoading to true
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         // ▲ ▲ ▲ made request and waiting to response
//         //<IUser[]> - this is what we will get as data (in responce.data) 

//         dispatch(userSlice.actions.userFetchingSuccess(response.data))
//         // ▲ ▲ ▲ add users from response to our store
//     } catch(e: any | {message: string}) {
//         dispatch(userSlice.actions.userFetchingError(e.message))
//     }
// } 
// redux-toolkit allows us to simplify this process abow ▲ ▲ ▲
// it's a built-in createAsyncThunk functon below  ▼ ▼ ▼

 
// fetchUsers - is an thunk creator.
// fetchUsers call result - is a thunk

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Some error occured')
        }
    }
)
