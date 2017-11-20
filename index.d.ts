/**
 * Returns randomly generated alpha-numeric string. Optionally you can specify custom length for returned string, defaults to `7`.
 * Note: At the moment, generated string is all lowercase, but is subject to change in future releases, should needs/use cases, require so. 
 */
declare function uid(length?: number);
export default uid;
