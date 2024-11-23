export enum StateFunctions {
  GET = "get",
  GET_ALL = "get-all",
  GET_KEYS = "get-keys",
  GET_VALUES = "get-values",
  GET_ENTRIES = "get-entries",
  GET_MAPPED = "get-mapped",
  GET_FILTERED = "get-filtered",
  GET_FOUND = "get-found",
  GET_INDEX = "get-index",
  GET_INDEXED = "get-indexed",
  GET_UNIQUE = "get-unique",
  GET_SORTED = "get-sorted",
  SET = "set",
  SET_INIT = "set-init",
  SET_MAPPED = "set-mapped",
  SET_FILTERED = "set-filtered",
  SET_UNIQUE = "set-unique",
  SET_SORTED = "set-sorted",
  EMPTY = "empty",
  REGISTER = "register",
  READ = "read",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

export enum ValidityTypes {
  INVALID = "invalid",
  OBJECT = "object",
}

export enum ValueTypes {
  STRING = "string",
  STRING_NUMBER = "string-as-number",
  NUMBER_STRING = "number-as-string",
  NUMBER = "number",
  BOOLEAN = "boolean",
  NAN = "NaN",
  OBJECT = "object",
  ARRAY = "array",
  UNDEFINED = "undefined",
  NULL = "null",
  FUNCTION = "function",
}

export enum ValueTypeStrings {
  STRING = "[object String]",
  NUMBER = "[object Number]",
  BOOLEAN = "[object Boolean]",
  OBJECT = "[object Object]",
  ARRAY = "[object Array]",
  UNDEFINED = "[object Undefined]",
  NULL = "[object Null]",
  FUNCTION = "[object Function]",
}

export enum FailReturnValues {
  INPUT = "input",
  ARRAY = "array",
  OBJECT = "object",
  NULL = "null",
  UNDEFINED = "undefined",
  FALSE = "false",
  ERROR = "error",
}

export enum ConversionDirTypes {
  ATO = "ATO",
  OTA = "OTA",
  ATA = "ATA",
  OTO = "OTO",
}
