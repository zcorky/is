import { TypeName } from '../utils/constants';

/**
 * is::string
 * @param value string
 */
export const string = (value: any): value is string=> typeof value === TypeName.string;