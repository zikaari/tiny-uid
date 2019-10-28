/**
 * Returns randomly generated alpha-numeric string.
 * 
 * @param length - Length of the generated string (default 7)
 * @param hex - set to true if returned value should be a hexadecimal based string (default false)
 */
declare function uid(length?: number, hex?: boolean);
export default uid;
