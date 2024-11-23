import {
  ArrayToObjectFailOutcomeT,
  FailReturnT,
  ObjectToArrayFailOutcomeT,
} from "../../functions/shared/failureOptionsTypes";

/**
 * D - default (desired) outcome (object)
 * I - function input (input argument) (array)
 * F - option of fail return union type
 */
export type ArrayToObjectOutcomeT<D, I, F extends FailReturnT> =
  | D
  | ArrayToObjectFailOutcomeT<D, I, F>;

/**
 * D - default (desired) outcome (array)
 * I - function input (input argument) (object)
 * F - option of fail return union type
 */
export type ObjectToArrayOutcomeT<D, I, F extends FailReturnT> =
  | D
  | ObjectToArrayFailOutcomeT<D, I, F>;
