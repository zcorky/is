import { TypeName } from '../utils/constants';

/**
 * is::boolean
 * @param value boolean
 */
export const boolean = (value: any): value is boolean => typeof value === TypeName.boolean;