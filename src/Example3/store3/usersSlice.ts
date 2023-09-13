import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type UserType = {
    age: number
    name: string
}
type MyStateType = {
    users: UserType[]
}

const initialState: MyStateType = {
    users: [
        { name: 'Bob', age: 30 },
        { name: 'Anna', age: 40 },
        { name: 'Mike', age: 50 },
    ]
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<UserType>) {
            const newUser: UserType = {
                name: action.payload.name,
                age: action.payload.age
            }
            state.users = [newUser, ...state.users]
        }
    }
})

export const { addUser } = usersSlice.actions

export default usersSlice.reducer

