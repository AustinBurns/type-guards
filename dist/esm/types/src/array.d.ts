import { Nilable, NonEmptyArray, UnknownRecord } from '@austinburns/type-utils';
export declare const isArray: (x: unknown) => x is unknown[];
export declare const isEmptyArray: (x: unknown) => x is never[];
export declare const isNonEmptyArray: <T>(x: Nilable<UnknownRecord | T[]>) => x is NonEmptyArray<T>;
//# sourceMappingURL=array.d.ts.map