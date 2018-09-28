/**
 * Type guards (http://www.typescriptlang.org/docs/handbook/advanced-types.html)
 */

export type Primitive = null | undefined | string | number | boolean | Symbol;

export const enum TypeName {
  null = 'null',
  undefined = 'undefined',
  boolean = 'boolean',
  string = 'string',
  number = 'number',
  symbol = 'symbol',
  object = 'object',
  function = 'function',
  Date = 'Date',
  Array = 'Array',
  Error = 'Error',
  Promise = 'Promise',
}

const PrimitiveTypes = new Set([
  'undefined',
  'string',
  'number',
  'boolean',
  'symbol',
]);

// Primitive
export const undefined = (value: any): value is undefined => typeof value === TypeName.undefined;

export const string = (value: any): value is string=> typeof value === TypeName.string;

export const number = (value: any): value is number => typeof value === TypeName.number;

export const boolean = (value: any): value is boolean => typeof value === TypeName.boolean;

export const symbol = (value: any): value is symbol => typeof value === TypeName.symbol;

// Functional
export const object = (value: any): value is object =>
  value !== null
  && (typeof value === TypeName.object || typeof value === TypeName.function);

export const array = (value: any): value is Array<any> => Array.isArray(value);

export const primitive = (value: any): value is Primitive => value === null || PrimitiveTypes.has(typeof value);

export const promise = (value: any): value is Promise<any> =>
  Object.prototype.toString.call(value) === '[object Promise]'
  || (!!value
      && (typeof value === TypeName.object || typeof value === TypeName.function)
      && typeof value.then === TypeName.function);

// Integer
export const integer = (value: any): value is number => Number.isInteger(value);

export const safeInteger = (value: any): value is number => Number.isSafeInteger(value);

