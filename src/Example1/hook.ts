import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import { RootStateType, AppDispatch } from './store' 

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector