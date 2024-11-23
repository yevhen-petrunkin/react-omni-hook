/* eslint-disable @typescript-eslint/no-explicit-any */
export type AnyFunctionT =
  | ((...args: any[]) => any | void)
  | (() => any | void);
