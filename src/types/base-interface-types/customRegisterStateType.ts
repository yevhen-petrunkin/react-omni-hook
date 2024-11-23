/* eslint-disable @typescript-eslint/no-explicit-any */
export type CustomRegisterStateT<
  U extends Record<string, (...args: any[]) => any>
> = {
  [K in keyof U]: U[K];
};
