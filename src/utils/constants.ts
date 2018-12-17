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
  RegExp = 'RegExp',
}

export const PrimitiveTypes = new Set([
  'undefined',
  'string',
  'number',
  'boolean',
  'symbol',
]);