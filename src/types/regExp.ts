import { TypeName } from '../utils/constants';
import { isObjectOfType } from '../utils/util';

/**
 * is::regExp
 * @param value RegExp
 */
export const regExp = isObjectOfType<RegExp>(TypeName.RegExp);
