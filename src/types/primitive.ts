import { PrimitiveTypes } from '../utils/constants';
import { Primitive } from '../typings';

/**
 * is::primitive
 * @param value primitive(null, undefined, string, number, boolean, symbol)
 */
export const primitive = (value: any): value is Primitive => value === null || PrimitiveTypes.has(typeof value);
