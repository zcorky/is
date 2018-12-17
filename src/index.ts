/**
 * Type guards (http://www.typescriptlang.org/docs/handbook/advanced-types.html)
 */

export { nul, nul as null } from './types/null';
export { undef, undef as undefined } from './types/undefined';
export { string } from './types/string';
export { number } from './types/number';
export { boolean } from './types/boolean';
export { symbol } from './types/symbol';
export { object } from './types/object';
export { array } from './types/array';
export { func } from './types/function';
export { date } from './types/date';
export { promise } from './types/promise';
export { integer, integer as int } from './types/integer';
export { safeInteger, safeInteger as safeInt } from './types/safeInteger';
export { float, float as double } from './types/float';
export { primitive } from './types/primitive';
export { regExp } from './types/regExp';