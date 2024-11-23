import { ObjectT } from "../../functions/shared/objectType";

const createEmptyObject = <T>(): ObjectT<T> => ({} as ObjectT<T>);

export default createEmptyObject;
