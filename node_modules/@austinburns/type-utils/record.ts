import { UnknownRecord } from "type-fest";
import { Nullable } from "./primitives";

// Commenly used type utilities from type-fest
export { EmptyObject, UnknownRecord } from "type-fest";

export type NullableProperties<T extends UnknownRecord> = {
  [K in keyof T]: Nullable<T[K]>;
};