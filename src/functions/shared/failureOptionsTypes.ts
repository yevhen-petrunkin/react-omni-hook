export type FailReturnT =
  | "input"
  | "array"
  | "object"
  | "null"
  | "undefined"
  | "false"
  | "error";

export type ArrayToObjectFailOutcomeT<
  D,
  I,
  F extends FailReturnT
> = F extends "input"
  ? I
  : F extends "array"
  ? I
  : F extends "object"
  ? D
  : F extends "null"
  ? null
  : F extends "undefined"
  ? undefined
  : F extends "false"
  ? false
  : F extends "error"
  ? never
  : never;

export type ObjectToArrayFailOutcomeT<
  D,
  I,
  F extends FailReturnT
> = F extends "input"
  ? I
  : F extends "array"
  ? D
  : F extends "object"
  ? I
  : F extends "null"
  ? null
  : F extends "undefined"
  ? undefined
  : F extends "false"
  ? false
  : F extends "error"
  ? never
  : never;
