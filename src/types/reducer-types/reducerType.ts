import { ActionI } from "./reducerActionType";

export type ReducerT<T> = (state: T, action: ActionI<T>) => T;
