import { ValidityCheckT } from "../checkup-types/validityCheckType";
import { FunctionsT } from "../function-types/functionsType";

export interface ActionI<T> {
  type: FunctionsT;
  newData?: Partial<T>;
  stateType: ValidityCheckT;
}
