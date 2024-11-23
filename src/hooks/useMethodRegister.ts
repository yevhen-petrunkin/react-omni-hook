import { MethodRegisterI } from "../types/function-types/methodRegisterType";
import getState from "../functions/methods/state";
import getKeys from "../functions/methods/keys";
import getValues from "../functions/methods/values";
import getEntries from "../functions/methods/entries";
import getToObject from "../functions/methods/toObject";
import getToArray from "../functions/methods/toArray";
import { ConfigI } from "../types/base-interface-types/configType";
import {
  KeysFnOutcomeT,
  KeysFnParamsT,
} from "../types/function-types/method-types/keysFnType";
import {
  ValuesFnOutcomeT,
  ValuesFnParamsT,
} from "../types/function-types/method-types/valuesFnType";
import {
  EntriesFnOutcomeT,
  EntriesFnParamsT,
} from "../types/function-types/method-types/entriesFnType";
import { useCallback, useMemo } from "react";
import {
  ToObjectFnConfigI,
  ToObjectFnOutcomeT,
} from "../types/function-types/method-types/toObjectFnType";
import { FailReturnT } from "../functions/shared/failureOptionsTypes";
import { ArrayT } from "../functions/shared/arrayType";
import {
  ToArrayFnConfigI,
  ToArrayFnOutcomeT,
  ToArrayFnParamsT,
} from "../types/function-types/method-types/toArrayFnType";
import { ObjectT } from "../functions/shared/objectType";

const useMethodRegister = <T, U>(
  dataState: T,
  config: ConfigI
): MethodRegisterI<T, U> => {
  const state = useCallback(() => getState(dataState), [dataState]);

  const keys = useCallback(
    (dataObj: KeysFnParamsT<T>): KeysFnOutcomeT<T> =>
      getKeys(dataObj === 0 ? dataState : dataObj),
    [dataState]
  );

  const values = useCallback(
    (dataObj: ValuesFnParamsT<T>): ValuesFnOutcomeT<T> =>
      getValues(dataObj === 0 ? dataState : dataObj),
    [dataState]
  );

  const entries = useCallback(
    (dataObj: EntriesFnParamsT<T, U>): EntriesFnOutcomeT<T, U> =>
      getEntries(dataObj === 0 ? dataState : dataObj),
    [dataState]
  );

  const toObject = useCallback(
    <T, F extends FailReturnT>(
      array: ArrayT<T>,
      config?: ToObjectFnConfigI<F>
    ): ToObjectFnOutcomeT<T, F> => getToObject(array, config),
    []
  );

  const toArray = useCallback(
    <T, F extends FailReturnT>(
      dataObj: ToArrayFnParamsT<T>,
      config?: ToArrayFnConfigI<F>
    ): ToArrayFnOutcomeT<T, F> =>
      getToArray((dataObj === 0 ? dataState : dataObj) as ObjectT<T>, config),
    [dataState]
  );

  const methodRegister: MethodRegisterI<T, U> = useMemo(
    () =>
      config?.allowDefault
        ? {
            state,
            keys,
            values,
            entries,
            toObject,
            toArray,
          }
        : ({} as MethodRegisterI<T, U>),
    [config, state, keys, values, entries, toObject, toArray]
  );

  return methodRegister;
};

export default useMethodRegister;
