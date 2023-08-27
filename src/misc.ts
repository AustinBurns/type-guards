export const isFunction = (x: unknown): x is (...args: unknown[]) => unknown =>
  typeof x === 'function';

export const isVoid = (x: unknown): x is void => x === void 0;

export const isError = (error: unknown): error is Error =>
  error instanceof Error;
