import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IFilterAction } from "./actions";
import { RootState } from "./store";
import { ThunkDispatch } from "redux-thunk";

export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, IFilterAction>>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;