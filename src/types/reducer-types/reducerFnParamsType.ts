import { ConfigI } from "../base-interface-types/configType";
import { ActionI } from "./reducerActionType";

export interface ReducerFnParams<T> {
  state: T;
  action: ActionI<T>;
  config?: ConfigI;
}
