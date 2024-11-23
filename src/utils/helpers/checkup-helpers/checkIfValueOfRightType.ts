import { ValueTypes, ValueTypeStrings } from "../../../enums/enums";
import { DataType } from "../../../types/checkup-types/dataTypes";

/**
 * This function is used to check if a given value is of a given type. It checks for
 * the following types: undefined, null, object, array, number, string, function, boolean, NaN,
 * string as number (if string can be converted into number) and number as string (if number can be converted into string).
 * @param {unknown} value The value to check.
 * @param {DataType} type The type to check against.
 * @returns {boolean} Returns true if the value is of the given type, otherwise false.
 */
const checkIfValueOfRightType = (value: unknown, type: DataType) => {
  const valueType = Object.prototype.toString.call(value);
  if (value == null) {
    if (
      type === ValueTypes.UNDEFINED &&
      valueType === ValueTypeStrings.UNDEFINED
    )
      return true;

    if (type === ValueTypes.NULL && valueType === ValueTypeStrings.NULL)
      return true;
    return false;
  }

  if (typeof value === ValueTypes.OBJECT) {
    if (type === ValueTypes.OBJECT && valueType === ValueTypeStrings.OBJECT)
      return true;

    if (
      type === ValueTypes.ARRAY &&
      valueType === ValueTypeStrings.ARRAY &&
      Array.isArray(value)
    )
      return true;
    return false;
  }

  if (valueType === ValueTypeStrings.NUMBER) {
    if (
      (type === ValueTypes.NUMBER || type === ValueTypes.NUMBER_STRING) &&
      !Number.isNaN(Number(value))
    )
      return true;
    if (type === ValueTypes.NAN && Number.isNaN(Number(value))) return true;
    return false;
  }

  if (valueType === ValueTypeStrings.STRING) {
    if (type === ValueTypes.STRING) return true;
    if (type === ValueTypes.STRING_NUMBER && !Number.isNaN(Number(value)))
      return true;
    return false;
  }

  if (valueType === ValueTypeStrings.FUNCTION && type === ValueTypes.FUNCTION)
    return true;
  if (valueType === ValueTypeStrings.BOOLEAN && type === ValueTypes.BOOLEAN)
    return true;
  return false;
};

export default checkIfValueOfRightType;
