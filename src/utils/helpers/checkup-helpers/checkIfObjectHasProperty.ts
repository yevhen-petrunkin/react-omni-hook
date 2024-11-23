import { ValueTypes } from "../../../enums/enums";
import checkIfValueOfRightType from "./checkIfValueOfRightType";

/**
 * Checks if an object has a specified property key.
 * 
 * @param {object} obj - The object to check.
 * @param {string | number} key - The key of the property to check for.
 * @param {boolean} [isOwnProp=true] - Whether to check only the object's own properties.
 * @returns {boolean} - Returns true if the key exists in the object, otherwise false.
 */
const checkIfObjectHasProperty = (
  obj: object,
  key: string | number,
  isOwnProp: boolean = true
): boolean => {
  if (!checkIfValueOfRightType(obj, ValueTypes.OBJECT)) return false;
  const formattedKey = key.toString().trim();
  if (isOwnProp) return Object.prototype.hasOwnProperty.call(obj, formattedKey);
  return formattedKey in obj;
};

export default checkIfObjectHasProperty;
