import { getObjectType } from '../utils/util';

/**
 * An object is plain if it's created by
 *  either `{}`, `new Object()`, or `Object.create(null)`.
 * @param value plain object
 */
export const plainObject = (value: unknown) => {
  let prototype;

  // @TODO
  //   'Object' = toString.call(value).slice(8, -1) ?
  //   'object' = typeof value ?
  return getObjectType(value) as any === 'Object'
    && (prototype = Object.getPrototypeOf(value), prototype === null
      || prototype === Object.getPrototypeOf({}));
}
