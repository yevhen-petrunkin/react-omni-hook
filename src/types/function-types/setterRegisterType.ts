/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetFnT } from "./setter-types/setFnType";

export interface SetterRegisterI<T> {
  [x: string]: any;
  set: SetFnT<T>;
}
