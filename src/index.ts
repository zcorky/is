export interface IS {
  (value: any): boolean;
}

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
export const undefined: IS = value => typeof value === TypeName.undefined;

export const string: IS = value => typeof value === TypeName.string;

export const number: IS = value => typeof value === TypeName.number;

export const boolean: IS = value => typeof value === TypeName.boolean;

export const symbol: IS = value => typeof value === TypeName.symbol;

// Functional
export const object: IS = (value): value is object =>
  value !== null
  && (typeof value === TypeName.object || typeof value === TypeName.function);

export const array: IS = value => Array.isArray(value);

export const primitive = (value): value is Primitive => value === null || PrimitiveTypes.has(typeof value);

export const promise = (value): value is Promise<any> =>
  Object.prototype.toString.call(value) === '[object Promise]'
  || (!!value
      && (typeof value === TypeName.object || typeof value === TypeName.function)
      && typeof value.then === TypeName.function);

// Integer
export const integer = (value): value is number => Number.isInteger(value);

export const safeInteger = (value): value is number => Number.isSafeInteger(value);

