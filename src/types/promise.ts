import { TypeName } from '../utils/constants';

/**
 * is::promise
 * @param value promise
 */
export const promise = (value: any): value is Promise<any> =>
  Object.prototype.toString.call(value) === '[object Promise]'
  || (!!value
      && (typeof value === TypeName.object || typeof value === TypeName.function)
      && typeof value.then === TypeName.function);
