import { TypeName } from '../utils/constants';
import { isObjectOfType } from '../utils/util';

export const regExp = isObjectOfType<RegExp>(TypeName.RegExp);
