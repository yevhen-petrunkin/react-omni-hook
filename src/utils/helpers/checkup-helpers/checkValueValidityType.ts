import { ValidityTypes, ValueTypeStrings } from "../../../enums/enums";
import { ValidityCheckT } from "../../../types/checkup-types/validityCheckType";

/**
 * Determines the validity type of a given value.
 * A value is considered of type 'OBJECT' if it is non-null and is an object.
 * Otherwise, it is considered 'INVALID'.
 * @param {unknown} value - The value to be checked.
 * @returns {ValidityCheckT} - Returns 'OBJECT' if valid, otherwise 'INVALID'.
 */
const checkValueValidityType = (value: unknown): ValidityCheckT => {
  if (
    value != null &&
    Object.prototype.toString.call(value) === ValueTypeStrings.OBJECT
  )
    return ValidityTypes.OBJECT;
  return ValidityTypes.INVALID;
};

export default checkValueValidityType;
