import {
  isBoolean,
  isEmptyString,
  isNil,
  isNonEmptyString,
  isNotNil,
  isNotNull,
  isNotUndefined,
  isNull,
  isNumber,
  isString,
  isUndefined,
} from './primitives';

describe('Primitive type guards', () => {
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
    { a: null, expected: true },
    { a: new Error(), expected: false },
    { a: void 0, expected: false },
    { a: (() => {})(), expected: false },
  ])(
    'should return $expected if `$a` is passed to `isNull`',
    ({ a, expected }) => {
      expect(isNull(a)).toBe(expected);
    },
  );

  it.each([
    { a: { name: 'foo' }, expected: true },
    { a: {}, expected: true },
    { a: [], expected: true },
    { a: ['boo'], expected: true },
    { a: () => 'hello friend', expected: true },
    { a: () => {}, expected: true },
    { a: 'boo', expected: true },
    { a: 6, expected: true },
    { a: 0, expected: true },
    { a: -6, expected: true },
    { a: true, expected: true },
    { a: false, expected: true },
    { a: undefined, expected: true },
    { a: null, expected: false },
    { a: new Error(), expected: true },
    { a: void 0, expected: true },
    { a: (() => {})(), expected: true },
  ])(
    'should return $expected if `$a` is passed to `isNotNull`',
    ({ a, expected }) => {
      expect(isNotNull(a)).toBe(expected);
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
    { a: undefined, expected: true },
    { a: null, expected: false },
    { a: new Error(), expected: false },
    { a: void 0, expected: true },
    { a: (() => {})(), expected: true },
  ])(
    'should return $expected if `$a` is passed to `isUndefined`',
    ({ a, expected }) => {
      expect(isUndefined(a)).toBe(expected);
    },
  );

  it.each([
    { a: { name: 'foo' }, expected: true },
    { a: {}, expected: true },
    { a: [], expected: true },
    { a: ['boo'], expected: true },
    { a: () => 'hello friend', expected: true },
    { a: () => {}, expected: true },
    { a: 'boo', expected: true },
    { a: 6, expected: true },
    { a: 0, expected: true },
    { a: -6, expected: true },
    { a: true, expected: true },
    { a: false, expected: true },
    { a: undefined, expected: false },
    { a: null, expected: true },
    { a: new Error(), expected: true },
    { a: void 0, expected: false },
    { a: (() => {})(), expected: false },
  ])(
    'should return $expected if `$a` is passed to `isNotUndefined`',
    ({ a, expected }) => {
      expect(isNotUndefined(a)).toBe(expected);
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
    { a: undefined, expected: true },
    { a: null, expected: true },
    { a: new Error(), expected: false },
    { a: void 0, expected: true },
    { a: (() => {})(), expected: true },
  ])(
    'should return $expected if `$a` is passed to `isNil`',
    ({ a, expected }) => {
      expect(isNil(a)).toBe(expected);
    },
  );

  it.each([
    { a: { name: 'foo' }, expected: true },
    { a: {}, expected: true },
    { a: [], expected: true },
    { a: ['boo'], expected: true },
    { a: () => 'hello friend', expected: true },
    { a: () => {}, expected: true },
    { a: 'boo', expected: true },
    { a: 6, expected: true },
    { a: 0, expected: true },
    { a: -6, expected: true },
    { a: true, expected: true },
    { a: false, expected: true },
    { a: undefined, expected: false },
    { a: null, expected: false },
    { a: new Error(), expected: true },
    { a: void 0, expected: false },
    { a: (() => {})(), expected: false },
  ])(
    'should return $expected if `$a` is passed to `isNotNil`',
    ({ a, expected }) => {
      expect(isNotNil(a)).toBe(expected);
    },
  );

  it.each([
    { a: { name: 'foo' }, expected: false },
    { a: {}, expected: false },
    { a: [], expected: false },
    { a: ['boo'], expected: false },
    { a: () => 'hello friend', expected: false },
    { a: () => {}, expected: false },
    { a: 'boo', expected: true },
    { a: '', expected: true },
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
    'should return $expected if `$a` is passed to `isString`',
    ({ a, expected }) => {
      expect(isString(a)).toBe(expected);
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
    { a: '', expected: true },
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
    'should return $expected if `$a` is passed to `isEmptyString`',
    ({ a, expected }) => {
      expect(isEmptyString(a)).toBe(expected);
    },
  );

  it.each([
    { a: { name: 'foo' }, expected: false },
    { a: {}, expected: false },
    { a: [], expected: false },
    { a: ['boo'], expected: false },
    { a: () => 'hello friend', expected: false },
    { a: () => {}, expected: false },
    { a: 'boo', expected: true },
    { a: '', expected: false },
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
    'should return $expected if `$a` is passed to `isNonEmptyString`',
    ({ a, expected }) => {
      expect(isNonEmptyString(a)).toBe(expected);
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
    { a: '', expected: false },
    { a: 6, expected: true },
    { a: 0, expected: true },
    { a: -6, expected: true },
    { a: true, expected: false },
    { a: false, expected: false },
    { a: undefined, expected: false },
    { a: null, expected: false },
    { a: new Error(), expected: false },
    { a: void 0, expected: false },
    { a: (() => {})(), expected: false },
  ])(
    'should return $expected if `$a` is passed to `isNumber`',
    ({ a, expected }) => {
      expect(isNumber(a)).toBe(expected);
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
    { a: '', expected: false },
    { a: 6, expected: false },
    { a: 0, expected: false },
    { a: -6, expected: false },
    { a: true, expected: true },
    { a: false, expected: true },
    { a: null, expected: false },
    { a: new Error(), expected: false },
    { a: void 0, expected: false },
    { a: (() => {})(), expected: false },
  ])(
    'should return $expected if `$a` is passed to `isBoolean`',
    ({ a, expected }) => {
      expect(isBoolean(a)).toBe(expected);
    },
  );
});
