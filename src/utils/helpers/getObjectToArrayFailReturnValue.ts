import { FailReturnValues } from "../../enums/enums";
import {
  FailReturnT,
  ObjectToArrayFailOutcomeT,
} from "../../functions/shared/failureOptionsTypes";
import getCommonFailReturnValue from "./getCommonFailReturnValue";

/**
 * Returns a value based on the fail option in case of failure during the Object to Array conversion.
 * @param {I} input Input object to be converted.
 * @param {F} fail Option of fail return union type.
 * @returns {ObjectToArrayFailOutcomeT<D, I, F>} Value to return in case of failure (input object, empty object, empty array or other fail value).
 */
const getObjectToArrayFailReturnValue = <D, I, F extends FailReturnT>(
  input: I,
  fail: F
): ObjectToArrayFailOutcomeT<D, I, F> => {
  switch (fail) {
    case FailReturnValues.INPUT:
      return input;
    case FailReturnValues.OBJECT:
      return {} as I;
    case FailReturnValues.ARRAY:
      return [] as D;
    default:
      return getCommonFailReturnValue<F>(fail) as ObjectToArrayFailOutcomeT<
        D,
        I,
        F
      >;
  }
};

export default getObjectToArrayFailReturnValue;
