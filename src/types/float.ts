import { number } from './number';

/**
 * is::float/double
 * @param value float/double
 */
export const float = (value: any): value is number => number(value) && !Number.isInteger(value);