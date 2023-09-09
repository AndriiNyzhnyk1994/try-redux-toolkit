import axios from "axios";
import { AppDispatchType } from "../store2";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { error } from "console";



export const fetchUsers = () => async (dispatch: AppDispatchType) => {
    try {
        dispatch(userSlice.actions.userFetching())
        // ▲ ▲ ▲ changed isLoading to true
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        // ▲ ▲ ▲ made request and waiting to response
        dispatch(userSlice.actions.userFetchingSuccess(response.data))
        // ▲ ▲ ▲ add users from response to our store
    } catch(e) {
        dispatch(userSlice.actions.userFetchingError('error occured'))
    }
} 