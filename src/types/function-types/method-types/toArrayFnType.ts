/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrayT } from "../../../functions/shared/arrayType";
import { FailReturnT } from "../../../functions/shared/failureOptionsTypes";
import { ObjectT } from "../../../functions/shared/objectType";
import { ObjectToArrayOutcomeT } from "../outcomeType";

export type ToArrayFnParamsT<T> = ObjectT<T> | 0;

export interface ToArrayFnConfigI<F extends FailReturnT> {
  keyAsId?: boolean;
  idName?: string;
  saveValid?: boolean;
  fail?: F;
}

export type ToArrayFnOutcomeT<T, F extends FailReturnT> = ObjectToArrayOutcomeT<
  ArrayT<T>,
  ObjectT<T>,
  F
>;

export type ToArrayFnT<T, F extends FailReturnT> = (
  object: ToArrayFnParamsT<T>,
  config?: ToArrayFnConfigI<F>
) => ToArrayFnOutcomeT<T, F>;
