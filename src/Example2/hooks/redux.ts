import { useDispatch } from "react-redux";
import { AppDispatchType } from "../store/store2";



//now we need some custom hooks to work with redux

export const useAppDispatch = () => useDispatch<AppDispatchType>()
// using the type <AppDispatchType> allows us to create  
// a special useDispatch hook to dispatch our store


