import { Nil, Undefinable } from '@austinburns/type-utils';
export declare const isNull: (x: unknown) => x is null;
export declare const isNotNull: <T>(x: unknown) => x is Exclude<T, null>;
export declare const isUndefined: (x: unknown) => x is undefined;
export declare const isNotUndefined: <T>(x: Undefinable<T>) => x is Exclude<T, undefined>;
export declare const isNil: (x: unknown) => x is Nil;
export declare const isNotNil: <T>(x: Nil | T) => x is T;
export declare const isString: (x: unknown) => x is string;
export declare const isEmptyString: (x: unknown) => x is "";
export declare const isNonEmptyString: (x: unknown) => x is string;
export declare const isNumber: (x: unknown) => x is number;
export declare const isBoolean: (x: unknown) => x is boolean;
//# sourceMappingURL=primitives.d.ts.map