import { FailReturnValues } from "../../enums/enums";
import {
  ArrayToObjectFailOutcomeT,
  FailReturnT,
} from "../../functions/shared/failureOptionsTypes";
import getCommonFailReturnValue from "./getCommonFailReturnValue";

/**
 * Returns a value based on the fail option in case of failure during the Array to Object conversion.
 * @param {I} input Input array to be converted.
 * @param {F} fail Option of fail return union type.
 * @returns {ArrayToObjectFailOutcomeT<D, I, F>} Value to return in case of failure (input array, empty object, empty array or other fail value).
 */
const getArrayToObjectFailReturnValue = <D, I, F extends FailReturnT>(
  input: I,
  fail: F
): ArrayToObjectFailOutcomeT<D, I, F> => {
  switch (fail) {
    case FailReturnValues.INPUT:
      return input;
    case FailReturnValues.OBJECT:
      return {} as D;
    case FailReturnValues.ARRAY:
      return [] as I;
    default:
      return getCommonFailReturnValue<F>(fail) as ArrayToObjectFailOutcomeT<
        D,
        I,
        F
      >;
  }
};

export default getArrayToObjectFailReturnValue;
