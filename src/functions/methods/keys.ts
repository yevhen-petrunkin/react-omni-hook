import {
  KeysFnOutcomeT,
  KeysFnParamsT,
} from "../../types/function-types/method-types/keysFnType";
import checkIfValidValue from "../../utils/helpers/checkup-helpers/checkIfValidValue";

/**
 * Retrieves the keys of an object.
 * @param {KeysFnParamsT<T>} newObj - The object from which to extract keys.
 * @returns {KeysFnOutcomeT<T>} An array of keys from the object, or an empty array if the input is invalid.
 */
const keys = <T>(newObj: KeysFnParamsT<T>): KeysFnOutcomeT<T> => {
  if (checkIfValidValue(newObj)) return Object.keys(newObj ?? {});
  return [] as KeysFnOutcomeT<T>;
};

export default keys;
