import DEFAULT_ENTITY_NAME from "../../constants/defaults/defaultEntityName";

/**
 * Logs a debug message to the console if `debug` is true.
 * @param {string} message The message to log.
 * @param {string} [entityName=DEFAULT_ENTITY_NAME] The name of the entity.
 * @param {boolean} [debug=false] Whether to log the message.
 */
const showDebugMessage = (
  message: string,
  entityName: string = DEFAULT_ENTITY_NAME,
  debug: boolean = false
): void => {
  if (!debug) return;
  console.log(`${entityName}: ${message}`);
};

export default showDebugMessage;
