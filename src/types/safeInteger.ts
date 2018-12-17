/**
 * is::safeInt/safeInteger
 * @param value safeInt/safeInteger
 */
export const safeInteger = (value: any): value is number => Number.isSafeInteger(value);