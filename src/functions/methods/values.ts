import {
  ValuesFnOutcomeT,
  ValuesFnParamsT,
} from "../../types/function-types/method-types/valuesFnType";
import checkIfValidValue from "../../utils/helpers/checkup-helpers/checkIfValidValue";

/**
 * Retrieves the values of an object as an array.
 * @param {ValuesFnParamsT<T>} newObj - The object from which to extract values.
 * @returns {ValuesFnOutcomeT<T>} An array of values from the object, or an empty array if the input is invalid.
 */
const values = <T>(newObj: ValuesFnParamsT<T>): ValuesFnOutcomeT<T> => {
  if (checkIfValidValue(newObj)) return Object.values(newObj ?? {});
  return [] as ValuesFnOutcomeT<T>;
};

export default values;
