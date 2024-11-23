/* eslint-disable @typescript-eslint/no-explicit-any */
export type ArrayT<T> = Record<string | keyof T, any | T[keyof T]>[];
