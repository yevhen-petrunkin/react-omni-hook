/* eslint-disable @typescript-eslint/no-explicit-any */
export type EntriesFnParamsT<T, U> = Record<string, any> | T | U | 0;
export type EntriesFnOutcomeT<T, U> = [
  string | keyof T | keyof U,
  any | T[keyof T] | U[keyof U]
][];

export type EntriesFnT<T, U> = (
  dataObj: EntriesFnParamsT<T, U>
) => EntriesFnOutcomeT<T, U>;
