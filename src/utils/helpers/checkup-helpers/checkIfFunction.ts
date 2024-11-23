/* eslint-disable @typescript-eslint/no-explicit-any */
const checkIfFunction = (value: any): value is (...args: any[]) => any =>
  typeof value === "function";

export default checkIfFunction;
