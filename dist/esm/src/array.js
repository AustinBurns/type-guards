"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNonEmptyArray = exports.isEmptyArray = exports.isArray = void 0;
const isArray = (x) => x instanceof Array;
exports.isArray = isArray;
const isEmptyArray = (x) => (0, exports.isArray)(x) && x.length === 0;
exports.isEmptyArray = isEmptyArray;
const isNonEmptyArray = (x) => (0, exports.isArray)(x) && x.length > 0;
exports.isNonEmptyArray = isNonEmptyArray;
