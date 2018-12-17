import { TypeName } from './constants';

const toString = Object.prototype.toString;

export const getObjectType = (value: any): TypeName | null => {
  const objectName = toString.call(value).slice(8, -1);

  if (objectName) {
    return objectName as TypeName;
  }

  return null;
}

export const isObjectOfType = <T>(type: TypeName) => (value: any): value is T => getObjectType(value) === type;
