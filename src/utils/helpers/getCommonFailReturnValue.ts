import { FailReturnValues } from "../../enums/enums";
import { FailReturnT } from "../../functions/shared/failureOptionsTypes";

/**
 * Returns a common fail return value based on the specified fail type.
 * @param {F} fail - The fail return type, which is a member of the FailReturnT union type.
 * @returns {null | boolean | undefined} - Returns null, false, or undefined based on the fail type.
 * @throws Will throw an error if the fail type is FailReturnValues.ERROR or an invalid value.
 */
const getCommonFailReturnValue = <F extends FailReturnT>(fail: F) => {
  switch (fail) {
    case FailReturnValues.NULL:
      return null;
    case FailReturnValues.FALSE:
      return false;
    case FailReturnValues.UNDEFINED:
      return undefined;
    case FailReturnValues.ERROR:
      throw new Error("Invalid data in the function");
    default:
      throw new Error("Invalid fail argument value");
  }
};

export default getCommonFailReturnValue;
