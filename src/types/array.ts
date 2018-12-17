/**
 * is::array
 * @param value array
 */
export const array = (value: any): value is Array<any> => Array.isArray(value);
