import { ArrayT } from "../../functions/shared/arrayType";

const createEmptyArray = <T>(): ArrayT<T> => [] as ArrayT<T>;

export default createEmptyArray;
