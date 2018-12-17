import { TypeName } from '../utils/constants';

/**
 * is::undefined
 * @param value undefined
 */
export const undef = (value: any): value is undefined => typeof value === TypeName.undefined;