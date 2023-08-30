"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasKey = exports.isNonEmptyRecord = exports.isEmptyRecord = exports.isRecord = void 0;
const isRecord = (x) => Object.prototype.toString.call(x) === '[object Object]';
exports.isRecord = isRecord;
const isEmptyRecord = (x) => (0, exports.isRecord)(x) && Object.keys(x).length === 0;
exports.isEmptyRecord = isEmptyRecord;
const isNonEmptyRecord = (x) => (0, exports.isRecord)(x) && Object.keys(x).length > 0;
exports.isNonEmptyRecord = isNonEmptyRecord;
/**
 * Curried function that tests if an input is an object
 * _and_ that a key that was passed in is a property of that object
 *
 * @param key - The key to test if it is a property of the input record
 * @returns A function that takes an unknown input and then tests if the
 *  input is an object and whether the key is a property of that object or not
 */
const hasKey = (x, key) => (0, exports.isNonEmptyRecord)(x) && key in x;
exports.hasKey = hasKey;
