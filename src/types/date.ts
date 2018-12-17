import { string as isString } from './string';
import { number as isNumber } from './number';

/**
 * is::date/date string/timestamps
 * @param value date/date string/timestamps
 */
export const date = (value: Date | string | number): value is Date => {
  if (isNumber(value)) {
    return value >= 0;
  }

  if (isString(value)) {
    return !!Date.parse(value)
  }

  return Object.prototype.toString.call(value) === '[object Date]';
}