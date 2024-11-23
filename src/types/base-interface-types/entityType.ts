import { EntityFnT } from "../function-types/entityFnType";
import { MethodRegisterI } from "../function-types/methodRegisterType";
import { SetterRegisterI } from "../function-types/setterRegisterType";

export type Entity<T, U> = T &
  U &
  SetterRegisterI<T> &
  MethodRegisterI<T, U> & { entity: EntityFnT<T, U> };
