import { useCallback, useMemo, useReducer } from "react";
import reducerHandler from "../reducer/reducerHandler";
import DEFAULT_CONFIG from "../constants/defaults/defaultConfig";
import { StateFunctions } from "../enums/enums";
import processRegister from "../utils/processRegister";
import { MethodRegisterI } from "../types/function-types/methodRegisterType";
import { SetterRegisterI } from "../types/function-types/setterRegisterType";
import { CustomRegisterStateT } from "../types/base-interface-types/customRegisterStateType";
import { DataStateT } from "../types/base-interface-types/dataStateType";
import { ConfigI } from "../types/base-interface-types/configType";
import { ValidityCheckT } from "../types/checkup-types/validityCheckType";
import checkValueValidityType from "../utils/helpers/checkup-helpers/checkValueValidityType";
import { ReducerT } from "../types/reducer-types/reducerType";
import useMethodRegister from "./useMethodRegister";
import { Entity } from "../types/base-interface-types/entityType";

const useOmniHook = <T extends DataStateT, U extends CustomRegisterStateT<U>>(
  hookState: T,
  register?: U,
  config?: ConfigI
): Entity<T, U> => {
  const customConfig: ConfigI = config ?? DEFAULT_CONFIG;
  const customRegister: U = register ?? ({} as U);

  const stateReducer: ReducerT<T> = (state, action) =>
    reducerHandler<T>({
      state,
      action,
      config: customConfig,
    });

  const init = (initialState: T): T => initialState;

  const [dataState, dispatchDataState] = useReducer<ReducerT<T>, T>(
    stateReducer,
    hookState,
    init
  );

  const stateType: ValidityCheckT = useMemo(
    () => checkValueValidityType(dataState),
    [dataState]
  );

  const set = useCallback(
    (newData: Partial<T>) =>
      dispatchDataState({ type: StateFunctions.SET, newData, stateType }),
    [stateType]
  );

  const setterRegister: SetterRegisterI<T> = useMemo(() => ({ set }), [set]);

  const methodRegister: MethodRegisterI<T, U> = useMethodRegister<T, U>(
    dataState,
    customConfig
  );

  let entityConfig: Entity<T, U> = useMemo(
    () => ({
      ...dataState,
      ...setterRegister,
      ...methodRegister,
      entity: () => entityConfig,
    }),
    [dataState, setterRegister, methodRegister]
  );

  const formattedCustomRegister = customConfig?.allowCustom
    ? processRegister<T, U>(entityConfig, customRegister)
    : {};

  entityConfig = {
    ...entityConfig,
    ...formattedCustomRegister,
  };

  const entity = useCallback((): Entity<T, U> => entityConfig, [entityConfig]);

  const newEntity: Entity<T, U> = useMemo(
    () => ({ ...entityConfig, entity }),
    [entityConfig, entity]
  );

  return newEntity;
};

export default useOmniHook;
