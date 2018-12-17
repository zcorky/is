import { TypeName } from '../utils/constants';

/**
 * is::function
 * @param value function
 */
export const func = (value: any): value is Function => typeof value === TypeName.function;