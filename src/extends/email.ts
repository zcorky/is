/**
 * is::email
 * @param value string
 */
export const email = (value: string) => /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value);
