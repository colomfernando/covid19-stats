/**
 * @name validateObj
 * @param {object} [obj={}]
 * @private
 * @description returns if arg is a valid object
 * @returns boolean
 * @example validateObj({name: 'test'}) // true
 */

export const validateObj = <T>(obj: Record<string, T> = {}): boolean =>
  obj && obj.constructor === Object;

/**
 * @name validateArr
 * @private
 * @description return if arg is a valid array
 * @param {array} [arr=[]]
 * @returns boolean
 * @example validateArr([1,2,3]) // true
 */
export const validateArr = (arr: [] = []): boolean => arr instanceof Array;

/**
 * @name validateString
 * @private
 * @description return if arg is a valid string
 * @param {string} string
 * @returns boolean
 * @example validateString('fizzmod') // true
 */
export const validateString = (str = ''): boolean =>
  !!(str && typeof str === 'string');

/**
 * @name validateNumber
 * @private
 * @description return if arg is a valid number
 * @param {number} number
 * @example validateNumber('fizzmod') // false
 * @example validateNumber(12) // true
 */
export const validateNumber = (num: number): boolean =>
  typeof num === 'number' && !Number.isNaN(Number(num));

/**
 * @name debounce
 * @private
 * @description function to delay execution of function
 * @param {function} func - function to execute
 * @param {number} [wait="100"] - time for wait execution
 * @returns function to execute
 */
export function debounce(
  func: (...args: never[]) => void,
  wait = 100
): () => void {
  let timeout: ReturnType<typeof setTimeout> | null;
  return function (this: typeof debounce, ...args) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}
