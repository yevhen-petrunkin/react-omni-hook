import {
  StateFnOutcomeT,
  StateFnParamsT,
} from "../../types/function-types/method-types/stateFnType";
import checkIfValidValue from "../../utils/helpers/checkup-helpers/checkIfValidValue";

/**
 * Returns a shallow copy of the given state object.
 * If the state object is not valid (i.e. null or undefined), returns an empty object.
 * @template T
 * @param {StateFnParamsT<T>} state The state object to be copied.
 * @returns {StateFnOutcomeT<T>} A shallow copy of the given state object, or an empty object if the input is invalid.
 */
const state = <T>(state: StateFnParamsT<T>): StateFnOutcomeT<T> => {
  if (checkIfValidValue(state)) return { ...state } as StateFnOutcomeT<T>;
  return {} as StateFnOutcomeT<T>;
};

export default state;
