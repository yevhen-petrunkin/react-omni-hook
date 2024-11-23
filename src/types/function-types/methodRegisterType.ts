/* eslint-disable @typescript-eslint/no-explicit-any */
import { FailReturnT } from "../../functions/shared/failureOptionsTypes";
import { EntriesFnT } from "./method-types/entriesFnType";
import { KeysFnT } from "./method-types/keysFnType";
import { StateFnMethodRegisterType } from "./method-types/stateFnType";
import { ToArrayFnT } from "./method-types/toArrayFnType";
import { ToObjectFnT } from "./method-types/toObjectFnType";
import { ValuesFnT } from "./method-types/valuesFnType";

export interface MethodRegisterI<T, U> {
  [x: string]: any;
  state: StateFnMethodRegisterType<T>;
  keys: KeysFnT<T>;
  values: ValuesFnT<T>;
  entries: EntriesFnT<T, U>;
  toObject: ToObjectFnT<T, FailReturnT>;
  toArray: ToArrayFnT<T, FailReturnT>;
}
