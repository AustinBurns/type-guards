import { hasKey, isEmptyRecord, isNonEmptyRecord, isRecord } from './record';

describe('Record type guards', () => {
  it.each([
    { a: { name: 'foo' }, expected: true },
    { a: {}, expected: true },
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
    { a: new Error(), expected: false },
    { a: void 0, expected: false },
    { a: (() => {})(), expected: false },
  ])(
    'should return $expected $a is passed to `isRecord`',
    ({ a, expected }) => {
      expect(isRecord(a)).toBe(expected);
    },
  );

  it.each([
    { a: { name: 'foo' }, expected: false },
    { a: {}, expected: true },
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
    { a: new Error(), expected: false },
    { a: void 0, expected: false },
    { a: (() => {})(), expected: false },
  ])(
    'should return $expected $a is passed to `isEmptyRecord`',
    ({ a, expected }) => {
      expect(isEmptyRecord(a)).toBe(expected);
    },
  );

  it.each([
    { a: { name: 'foo' }, expected: true },
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
    { a: new Error(), expected: false },
    { a: void 0, expected: false },
    { a: (() => {})(), expected: false },
  ])(
    'should return $expected if $a is passed to `isNonEmptyRecord`',
    ({ a, expected }) => {
      expect(isNonEmptyRecord(a)).toBe(expected);
    },
  );

  it.each([
    { a: 'foo', b: { foo: 0 }, expected: true },
    { a: 'foo', b: { bar: 0, baz: 0, foo: 0 }, expected: true },
    { a: 'foo', b: { bar: 0 }, expected: false },
    { a: 'foo', b: {}, expected: false },
    { a: 'foo', b: [], expected: false },
    { a: 'foo', b: ['boo'], expected: false },
    { a: 'foo', b: () => 'hello friend', expected: false },
    { a: 'foo', b: () => {}, expected: false },
    { a: 'foo', b: 'boo', expected: false },
    { a: 'foo', b: 6, expected: false },
    { a: 'foo', b: 0, expected: false },
    { a: 'foo', b: -6, expected: false },
    { a: 'foo', b: true, expected: false },
    { a: 'foo', b: false, expected: false },
    { a: 'foo', b: undefined, expected: false },
    { a: 'foo', b: null, expected: false },
    { a: 'foo', b: new Error(), expected: false },
    { a: 'foo', b: void 0, expected: false },
    { a: 'foo', b: (() => {})(), expected: false },
  ])(
    'should return $expected if unknown input $b and key input $a are passed to `hasKey`',
    ({ a, b, expected }) => {
      expect(hasKey(b, a)).toBe(expected);
    },
  );
});
