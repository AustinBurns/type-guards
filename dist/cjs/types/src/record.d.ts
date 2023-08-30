import { EmptyObject, UnknownRecord } from '@austinburns/type-utils';
export declare const isRecord: (x: unknown) => x is UnknownRecord | EmptyObject;
export declare const isEmptyRecord: (x: unknown) => x is EmptyObject;
export declare const isNonEmptyRecord: (x: unknown) => x is UnknownRecord;
/**
 * Curried function that tests if an input is an object
 * _and_ that a key that was passed in is a property of that object
 *
 * @param key - The key to test if it is a property of the input record
 * @returns A function that takes an unknown input and then tests if the
 *  input is an object and whether the key is a property of that object or not
 */
export declare const hasKey: <Key extends string>(x: unknown, key: Key) => x is { [K in Key]: unknown; };
//# sourceMappingURL=record.d.ts.map