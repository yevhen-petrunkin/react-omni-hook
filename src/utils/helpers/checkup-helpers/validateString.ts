import checkIfValueIsValidString from "./checkIfValueIsValidString";

/**
 * Validates a string value.
 * Returns the trimmed string value if it is valid, otherwise undefined.
 * A valid string is not null or undefined, is of type string, and has a length greater than 0 after trimming.
 * @param {unknown} value - The value to validate.
 * @returns {string | undefined} - The validated string value or undefined if invalid.
 */
const validateString = (value: unknown): string | undefined => {
  return checkIfValueIsValidString(value)
    ? (value as string).trim()
    : undefined;
};

export default validateString;
