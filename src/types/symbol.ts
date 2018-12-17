import { TypeName } from '../utils/constants';

/**
 * is::symbol
 * @param value symbol
 */
export const symbol = (value: any): value is symbol => typeof value === TypeName.symbol;
