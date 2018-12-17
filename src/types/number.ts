import { TypeName } from '../utils/constants';

/**
 * is::number
 * @param value number
 */
export const number = (value: any): value is number => typeof value === TypeName.number;
