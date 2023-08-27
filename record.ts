import { EmptyObject, UnknownRecord } from "@austinburns/type-utils";

export const isRecord = (x: unknown): x is EmptyObject | UnknownRecord =>
  Object.prototype.toString.call(x) === '[object Object]';

export const isEmptyRecord = (x: unknown): x is EmptyObject =>
  isRecord(x) && Object.keys(x).length === 0;

export const isNonEmptyRecord = (x: unknown): x is UnknownRecord =>
  isRecord(x) && Object.keys(x).length > 0;

/**
 * Curried function that tests if an input is an object
 * _and_ that a key that was passed in is a property of that object
 *
 * @param key - The key to test if it is a property of the input record
 * @returns A function that takes an unknown input and then tests if the
 *  input is an object and whether the key is a property of that object or not
 */
export const hasKey = <Key extends string>(x: unknown, key: Key): x is { [K in Key]: unknown } =>
  isNonEmptyRecord(x) && key in x;