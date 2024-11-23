/* eslint-disable @typescript-eslint/no-explicit-any */
export type ValuesFnParamsT<T> = Record<string, any> | T | 0;
export type ValuesFnOutcomeT<T> = (any | T[keyof T])[];

export type ValuesFnT<T> = (dataObj: ValuesFnParamsT<T>) => ValuesFnOutcomeT<T>;
