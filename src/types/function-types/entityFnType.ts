import { Entity } from "../base-interface-types/entityType";

export type EntityFnT<T, U> = () => Entity<T, U>;
