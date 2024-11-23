/* eslint-disable @typescript-eslint/no-explicit-any */
export type KeysFnParamsT<T> = Record<string, any> | T | 0;
export type KeysFnOutcomeT<T> = (string | keyof T)[];

export type KeysFnT<T> = (dataObj: KeysFnParamsT<T>) => KeysFnOutcomeT<T>;
