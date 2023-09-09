import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatchType, RootStateType } from "../store/store2";
import { useSelector } from "react-redux";



//now we need some custom hooks to work with redux

export const useAppDispatch = () => useDispatch<AppDispatchType>();
// using the type <AppDispatchType> allows us to create  
// a special useDispatch hook to dispatch our store

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
// we need to add TypedUseSelectorHook<RootStateType> to useAppSelector
// to get an opportunity to use our state from our custom hook useAppSelector

