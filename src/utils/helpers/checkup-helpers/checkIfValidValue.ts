import { ValueTypeStrings } from "../../../enums/enums";

/**
 * Checks if the given value is valid.
 * A value is considered valid if it is not null or undefined and is an object.
 * @param {unknown} value - The value to check.
 * @returns {boolean} - Returns true if the value is valid, otherwise false.
 */
const checkIfValidValue = (value: unknown): boolean => {
  return (
    value != null &&
    Object.prototype.toString.call(value) === ValueTypeStrings.OBJECT
  );
};

export default checkIfValidValue;
