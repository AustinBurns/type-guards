import { isError, isFunction, isVoid } from './misc';

describe('Misc type guards', () => {
  it.each([
    { a: { name: 'foo' }, expected: false },
    { a: {}, expected: false },
    { a: [], expected: false },
    { a: ['boo'], expected: false },
    { a: () => 'hello friend', expected: true },
    { a: () => {}, expected: true },
    { a: 'boo', expected: false },
    { a: 6, expected: false },
    { a: 0, expected: false },
    { a: -6, expected: false },
    { a: true, expected: false },
    { a: false, expected: false },
    { a: undefined, expected: false },
    { a: null, expected: false },
    { a: new Error(), expected: false },
    { a: void 0, expected: false },
    { a: (() => {})(), expected: false },
  ])(
    'should return $expected if $a is passed to `isFunction`',
    ({ a, expected }) => {
      expect(isFunction(a)).toBe(expected);
    },
  );

  it.each([
    { a: { name: 'foo' }, expected: false },
    { a: {}, expected: false },
    { a: [], expected: false },
    { a: ['boo'], expected: false },
    { a: () => 'hello friend', expected: false },
    { a: () => {}, expected: false },
    { a: 'boo', expected: false },
    { a: 6, expected: false },
    { a: 0, expected: false },
    { a: -6, expected: false },
    { a: true, expected: false },
    { a: false, expected: false },
    { a: undefined, expected: false },
    { a: null, expected: false },
    { a: new Error(), expected: true },
    { a: void 0, expected: false },
    { a: (() => {})(), expected: false },
  ])(
    'should return $expected if $a is passed to `isError`',
    ({ a, expected }) => {
      expect(isError(a)).toBe(expected);
    },
  );

  it.each([
    { a: { name: 'foo' }, expected: false },
    { a: {}, expected: false },
    { a: [], expected: false },
    { a: ['boo'], expected: false },
    { a: () => 'hello friend', expected: false },
    { a: () => {}, expected: false },
    { a: 'boo', expected: false },
    { a: 6, expected: false },
    { a: 0, expected: false },
    { a: -6, expected: false },
    { a: true, expected: false },
    { a: false, expected: false },
    // void evaluates to undefined: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
    { a: undefined, expected: true },
    { a: null, expected: false },
    { a: new Error(), expected: false },
    { a: void 0, expected: true },
    { a: (() => {})(), expected: true },
  ])(
    'should return $expected if $a is passed to `isVoid`',
    ({ a, expected }) => {
      expect(isVoid(a)).toBe(expected);
    },
  );
});
