import { Entity } from "../types/base-interface-types/entityType";
import checkIfFunction from "./helpers/checkup-helpers/checkIfFunction";

/**
 * Process a register object of custom functions by binding all functions to the register data object, and return the processed register object.
 * @param {Entity<T, U>} regData - The register data (entity object).
 * @param {U} register - The register object of custom functions to be processed.
 * @returns {U} The processed register object of custom functions bound to the register data object.
 */
const processRegister = <T, U>(regData: Entity<T, U>, register: U): U => {
  const processedRegister = {} as U;
  for (const [key, value] of regData.entries(register) as [
    keyof U,
    U[keyof U]
  ][]) {
    if (checkIfFunction(value)) {
      processedRegister[key] = ((...args: Parameters<typeof value>) =>
        value.bind(regData)(...args)) as U[keyof U];
    }
  }
  return processedRegister;
};

export default processRegister;
