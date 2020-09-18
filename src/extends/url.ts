/**
 * is::url
 * @param value string
 */
export const url = (value: string) => /^https?:\/\//.test(value);
