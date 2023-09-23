import {
  isArray,
  isEmptyArray,
  isIndexOutOfBound,
  isNonEmptyArray,
} from './array';

describe('Array type guards', () => {
  it.each([
    { a: { name: 'foo' }, expected: false },
    { a: {}, expected: false },
    { a: [], expected: true },
    { a: ['boo'], expected: true },
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
    { a: new Error(), expected: false },
    { a: void 0, expected: false },
    { a: (() => {})(), expected: false },
  ])(
    'should return $expected when $a is passed to `isArray`',
    ({ a, expected }) => {
      expect(isArray(a)).toBe(expected);
    },
  );

  it.each([
    { a: { name: 'foo' }, expected: false },
    { a: {}, expected: false },
    { a: [], expected: true },
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
    { a: new Error(), expected: false },
    { a: void 0, expected: false },
    { a: (() => {})(), expected: false },
  ])(
    'should return $expected when $a is passed to `isEmptyArray`',
    ({ a, expected }) => {
      expect(isEmptyArray(a)).toBe(expected);
    },
  );

  it.each([
    { a: { name: 'foo' }, expected: false },
    { a: {}, expected: false },
    { a: [], expected: false },
    { a: ['boo'], expected: true },
    { a: undefined, expected: false },
    { a: null, expected: false },
    { a: void 0, expected: false },
  ])(
    'should return $expected when $a is passed to `isNonEmptyArray`',
    ({ a, expected }) => {
      expect(isNonEmptyArray(a)).toBe(expected);
    },
  );

  it.each([
    { a: [1, 2, 3, 4], b: 0, expected: false },
    { a: [1, 2, 3, 4], b: 2, expected: false },
    { a: [1, 2, 3, 4], b: 3, expected: false },
    { a: [1, 2, 3, 4], b: 4, expected: true },
    { a: [], b: 1, expected: true },
    { a: ['boo', 2], b: 2, expected: true },
  ])(
    'should return $expected when $a is passed to `isIndexOutOfBound`',
    ({ a, b, expected }) => {
      expect(isIndexOutOfBound(a, b)).toBe(expected);
    },
  );
});
