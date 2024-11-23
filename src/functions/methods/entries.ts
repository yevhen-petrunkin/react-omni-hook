import {
  EntriesFnOutcomeT,
  EntriesFnParamsT,
} from "../../types/function-types/method-types/entriesFnType";
import checkIfValidValue from "../../utils/helpers/checkup-helpers/checkIfValidValue";

/**
 * Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
 * @param {EntriesFnParamsT<T, U>} newObj Object to get the entries from.
 * @returns {EntriesFnOutcomeT<T, U>} An array of the object's own enumerable string-keyed property [key, value] pairs.
 */
const entries = <T, U>(
  newObj: EntriesFnParamsT<T, U>
): EntriesFnOutcomeT<T, U> => {
  if (checkIfValidValue(newObj)) return Object.entries(newObj ?? {});
  return [] as EntriesFnOutcomeT<T, U>;
};

export default entries;
