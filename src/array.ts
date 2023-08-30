import { Nilable, NonEmptyArray, UnknownRecord } from '@austinburns/type-utils';

export const isArray = (x: unknown): x is unknown[] => x instanceof Array;

export const isEmptyArray = (x: unknown): x is never[] =>
  isArray(x) && x.length === 0;

export const isNonEmptyArray = <T>(
  x: Nilable<T[] | UnknownRecord>,
): x is NonEmptyArray<T> => isArray(x) && x.length > 0;
