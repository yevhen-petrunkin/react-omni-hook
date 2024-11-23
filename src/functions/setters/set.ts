// import checkValueType from "../utils/helpers/checkValueType";
import { ReducerFnParams } from "../../types/reducer-types/reducerFnParamsType";

/**
 * Merges new data from an action into the current state.
 * @template T
 * @param {ReducerFnParams<T>} params - The parameters containing the current state and action.
 * @param {T} params.state - The current state object.
 * @param {ActionI<T>} params.action - The action containing the new data to merge into the state.
 * @returns {T} The new state object with the merged data.
 */
const set = <T>({ state, action }: ReducerFnParams<T>) => {
  return { ...state, ...action.newData };
};

export default set;
