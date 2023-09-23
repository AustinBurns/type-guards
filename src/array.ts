import { Nilable, NonEmptyArray, UnknownRecord } from '@austinburns/type-utils';
import { isNil } from './primitives';

export const isArray = (x: unknown): x is unknown[] => x instanceof Array;

export const isEmptyArray = (x: unknown): x is never[] =>
  isArray(x) && x.length === 0;

export const isNonEmptyArray = <T>(
  x: Nilable<T[] | UnknownRecord>,
): x is NonEmptyArray<T> => isArray(x) && x.length > 0;

export const isIndexOutOfBound = <T>(as: Array<T>, index: number) =>
  isNil(as[index]);
