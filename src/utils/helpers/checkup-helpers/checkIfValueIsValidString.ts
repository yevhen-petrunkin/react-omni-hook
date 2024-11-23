import { ValueTypes } from "../../../enums/enums";
import checkIfValueOfRightType from "./checkIfValueOfRightType";

/**
 * Checks if a given value is a valid string.
 * A valid string is not null or undefined, is of type string, and has a length greater than 0 after trimming.
 * @param {unknown} value - The value to check.
 * @returns {boolean} - Returns true if the value is a valid string, otherwise false.
 */
const checkIfValueIsValidString = (value: unknown): boolean =>
  !!(
    value != null &&
    checkIfValueOfRightType(value, ValueTypes.STRING) &&
    (value as string).trim().length > 0
  );

export default checkIfValueIsValidString;
