/**
 * is::int/integer
 * @param value int/integer
 */
export const integer = (value: any): value is number => Number.isInteger(value);