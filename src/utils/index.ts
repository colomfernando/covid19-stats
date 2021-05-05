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