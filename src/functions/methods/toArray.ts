import { DEFAULT_KEY_PROPERTY } from "../../constants/defaults/defaultKeyProperty";
import { FailReturnValues, ValueTypes } from "../../enums/enums";
import {
  ToArrayFnConfigI,
  ToArrayFnOutcomeT,
} from "../../types/function-types/method-types/toArrayFnType";
import checkIfValueOfRightType from "../../utils/helpers/checkup-helpers/checkIfValueOfRightType";
import validateString from "../../utils/helpers/checkup-helpers/validateString";
import createEmptyArray from "../../utils/helpers/createEmptyArray";
import getObjectToArrayFailReturnValue from "../../utils/helpers/getObjectToArrayFailReturnValue";
import { ArrayT } from "../shared/arrayType";
import { FailReturnT } from "../shared/failureOptionsTypes";
import { ObjectT } from "../shared/objectType";

/**
 * Converts an object to an array.
 * @param {ObjectT<T>} object Object to be converted.
 * @param {ToArrayFnConfigI<F>} [config] Optional configuration object.
 * @param {boolean} [config.keyAsId=false] Should key of each object be added as an 'id' property to the new array objects.
 * @param {string} [config.idName] Custom 'id' property name for the key of each object in the new array objects ('id' by default).
 * @param {boolean} [config.saveValid=false] Should the function save only valid data in the array or return fail value in case of invalid data.
 * @param {FailReturnT} [config.fail=FailReturnValues.ARRAY] Value to return in case of invalid data or failure.
 * @returns {ToArrayFnOutcomeT<T, F>} Array of objects created from the input object.
 */
const toArray = <T, F extends FailReturnT = FailReturnT>(
  object: ObjectT<T>,
  {
    keyAsId = false,
    idName,
    saveValid = false,
    fail = FailReturnValues.ARRAY as F,
  }: ToArrayFnConfigI<F> = {
    keyAsId: false,
    saveValid: false,
    fail: FailReturnValues.ARRAY as F,
  }
): ToArrayFnOutcomeT<T, F> => {
  const failValue = getObjectToArrayFailReturnValue<ArrayT<T>, ObjectT<T>, F>(
    object,
    fail
  );

  if (!checkIfValueOfRightType(object, ValueTypes.OBJECT)) return failValue;
  const isIdNameUndefined = checkIfValueOfRightType(
    idName,
    ValueTypes.UNDEFINED
  );
  const idKey = validateString(idName);

  if (!isIdNameUndefined && !idKey) return failValue;

  const idProp: string | keyof T =
    !isIdNameUndefined && idKey ? idKey : DEFAULT_KEY_PROPERTY;

  const newArr: ArrayT<T> = createEmptyArray();

  for (const [key, value] of Object.entries(object ?? {})) {
    if (keyAsId && !checkIfValueOfRightType(value, ValueTypes.OBJECT)) {
      if (saveValid) continue;
      return failValue;
    }
    if (keyAsId) {
      newArr.push({ ...value, [idProp]: key });
    } else {
      newArr.push(value);
    }
  }

  return [...newArr];
};

export default toArray;
