import { TypeName } from '../utils/constants';

/**
 * is::object
 * @param value object
 */
export const object = (value: any): value is object =>
  value !== null
  && (typeof value === TypeName.object || typeof value === TypeName.function);
