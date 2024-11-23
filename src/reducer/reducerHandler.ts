import { StateFunctions } from "../enums/enums";
import set from "../functions/setters/set";
import { ReducerFnParams } from "../types/reducer-types/reducerFnParamsType";

const stateReducerHandler = <T>({
  state,
  action,
  config,
}: ReducerFnParams<T>): T => {
  if (action.type === StateFunctions.SET) return set({ state, action, config });

  return { ...state };
};

export default stateReducerHandler;
