import { DEFAULT_KEY_PROPERTY } from "../../constants/defaults/defaultKeyProperty";
import { FailReturnValues, ValueTypes } from "../../enums/enums";
import {
  ToObjectFnConfigI,
  ToObjectFnOutcomeT,
} from "../../types/function-types/method-types/toObjectFnType";
import checkIfObjectHasProperty from "../../utils/helpers/checkup-helpers/checkIfObjectHasProperty";
import checkIfValueOfRightType from "../../utils/helpers/checkup-helpers/checkIfValueOfRightType";
import validateString from "../../utils/helpers/checkup-helpers/validateString";
import createEmptyObject from "../../utils/helpers/createEmptyObject";
import getArrayToObjectFailReturnValue from "../../utils/helpers/getArrayToObjectFailReturnValue";
import { ArrayT } from "../shared/arrayType";
import { FailReturnT } from "../shared/failureOptionsTypes";
import { ObjectT } from "../shared/objectType";

/**
 * Converts an array of objects to a single object of objects.
 * @param {ArrayT<T>} array Array of objects to be converted.
 * @param {ToObjectFnConfigI<F>} [config] Optional configuration object.
 * @param {string} [config.asKey] Property key of the object to use as key in the new object ('id' by default).
 * @param {boolean} [config.isOwnProp=true] Check for the key property as an own property.
 * @param {boolean} [config.saveValid=false] Save only valid items or return fail value if any item is invalid.
 * @param {FailReturnT} [config.fail=FailReturnValues.OBJECT] Value to return in case of failure.
 * @returns {ToObjectFnOutcomeT<T, F>} An object created from the input array.
 */
const toObject = <T, F extends FailReturnT = FailReturnT>(
  array: ArrayT<T>,
  {
    asKey,
    isOwnProp = true,
    saveValid = false,
    fail = FailReturnValues.OBJECT as F,
  }: ToObjectFnConfigI<F> = {
    isOwnProp: true,
    saveValid: false,
    fail: FailReturnValues.OBJECT as F,
  }
): ToObjectFnOutcomeT<T, F> => {
  const failValue = getArrayToObjectFailReturnValue<ObjectT<T>, ArrayT<T>, F>(
    array,
    fail
  );

  if (!checkIfValueOfRightType(array, ValueTypes.ARRAY)) return failValue;

  const isKeyUndefined = checkIfValueOfRightType(asKey, ValueTypes.UNDEFINED);
  const objKey = validateString(asKey);

  if (!isKeyUndefined && !objKey) return failValue;

  const keyProp: string | keyof T =
    !isKeyUndefined && objKey ? objKey : DEFAULT_KEY_PROPERTY;

  const usedKeys: string[] = [];
  const newObj: ObjectT<T> = createEmptyObject();

  // TODO: Handle same keys in different objects, handle exclude param
  for (const item of array) {
    if (
      !checkIfValueOfRightType(item, ValueTypes.OBJECT) || // if item is not an object
      !checkIfObjectHasProperty(item, keyProp, isOwnProp) || // if object does not have this property
      !(
        checkIfValueOfRightType(item[keyProp], ValueTypes.STRING) || // if object property is not a string or valid number
        checkIfValueOfRightType(item[keyProp], ValueTypes.NUMBER)
      ) ||
      usedKeys.includes(item[keyProp].toString().trim()) // if property with such key has already been added to the created object
    ) {
      if (saveValid) continue;
      return failValue;
    }
    const newKey: string = item[keyProp].toString().trim();
    usedKeys.push(newKey);
    Object.assign(newObj, { [newKey]: item });
  }

  return newObj;
};

export default toObject;
