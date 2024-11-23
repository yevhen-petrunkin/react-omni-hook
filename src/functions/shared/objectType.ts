/* eslint-disable @typescript-eslint/no-explicit-any */
export type ObjectT<T> = Record<
  string | keyof T,
  Record<string | keyof T, any | T[keyof T]>
>;
