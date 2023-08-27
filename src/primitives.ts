import { Nil, Undefinable } from '@austinburns/type-utils';

export const isNull = (x: unknown): x is null => x === null;

export const isNotNull = <T>(x: unknown): x is Exclude<T, null> => !isNull(x);

export const isUndefined = (x: unknown): x is undefined => x === undefined;

export const isNotUndefined = <T>(
  x: Undefinable<T>,
): x is Exclude<T, undefined> => !isUndefined(x);

export const isNil = (x: unknown): x is Nil => isNull(x) || isUndefined(x);

export const isNotNil = <T>(x: Nil | T): x is T => !isNil(x);

export const isString = (x: unknown): x is string => typeof x === 'string';

export const isEmptyString = (x: unknown): x is '' => isString(x) && x === '';

export const isNonEmptyString = (x: unknown): x is string =>
  isString(x) && x !== '';

export const isNumber = (x: unknown): x is number => typeof x === 'number';

export const isBoolean = (x: unknown): x is boolean => typeof x === 'boolean';
