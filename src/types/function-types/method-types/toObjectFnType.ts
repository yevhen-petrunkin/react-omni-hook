import { ArrayT } from "../../../functions/shared/arrayType";
import { FailReturnT } from "../../../functions/shared/failureOptionsTypes";
import { ObjectT } from "../../../functions/shared/objectType";
import { ArrayToObjectOutcomeT } from "../outcomeType";

export interface ToObjectFnConfigI<F extends FailReturnT> {
  asKey?: string;
  isOwnProp?: boolean;
  saveValid?: boolean;
  fail?: F;
}

export type ToObjectFnOutcomeT<
  T,
  F extends FailReturnT
> = ArrayToObjectOutcomeT<ObjectT<T>, ArrayT<T>, F>;

export type ToObjectFnT<T, F extends FailReturnT> = (
  array: ArrayT<T>,
  config?: ToObjectFnConfigI<F>
) => ToObjectFnOutcomeT<T, F>;
