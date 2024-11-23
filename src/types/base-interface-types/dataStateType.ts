/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyFunctionT } from "./anyFunctionType";

export type DataStateT<T = any> = T extends object
  ? T extends
      | AnyFunctionT
      | Array<any>
      | Date
      | RegExp
      | Map<any, any>
      | Set<any>
      | null
      | undefined
    ? never
    : {
        [K in keyof T]: Exclude<T[K], AnyFunctionT> extends object
          ? DataStateT<Exclude<T[K], AnyFunctionT>>
          : Exclude<T[K], AnyFunctionT>;
      }
  : never;
