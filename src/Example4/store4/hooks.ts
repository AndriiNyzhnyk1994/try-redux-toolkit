import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatchType4, RootStateType4 } from "./store4";

export const useAppDispatch4 = () => useDispatch<AppDispatchType4>()
export const useAppSelector4: TypedUseSelectorHook<RootStateType4> = useSelector;
