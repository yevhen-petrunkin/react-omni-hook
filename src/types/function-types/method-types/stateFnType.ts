/* eslint-disable @typescript-eslint/no-explicit-any */
export type StateFnParamsT<T> = T;
export type StateFnOutcomeT<T> = T;

export type StateFnMethodRegisterType<T> = () => StateFnOutcomeT<T>;
export type StateFnT<T> = (state: StateFnParamsT<T>) => StateFnOutcomeT<T>;
