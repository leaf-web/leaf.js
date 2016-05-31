/* 
   #functions
   ========================================================================== */

/**
 * Determines if a reference is a string.
 * @function isString
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a string.
 */
leaf.isString = function(value) { return typeof value === 'string' || value instanceof String; };

/**
 * Determines if a reference is a number.
 * @function isNumber
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a number.
 */
leaf.isNumber = function(value) { return typeof value === 'number'; };

/**
 * Determines if a reference is a boolean.
 * @function isBoolean
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a boolean.
 */
leaf.isBoolean = function(value) { return typeof value === 'boolean'; };

/**
 * Determines if a reference is an Array.
 * @function isArray
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is an Array.
 */
leaf.isArray = function(value) { return value.constructor === Array; };

/**
 * Determines if a reference is a Function.
 * @function isFunction
 * @memberOf leaf
 * @param  {*} value The reference to check.
 * @return {boolean} True if value is a Function.
 */
leaf.isFunction = function(value) { return typeof value === 'function'; };

/**
 * Determines if a reference is an Object.
 * @function isObject
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is an Object.
 */
leaf.isObject = function(value) { return typeof value === 'object'; };

/**
 * Determines if a reference is a Date.
 * @function isDate
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a Date.
 */
leaf.isDate = function(value) { return Object.prototype.toString.call(value) === '[object Date]'; };

/**
 * Determines if a reference is defined.
 * @function isDefined
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is defined.
 */
leaf.isDefined = function(value) { return typeof value !== 'undefined'; };

/**
 * Determines if a reference is undefined.
 * @function isUndefined
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is undefined.
 */
leaf.isUndefined = function(value) { return typeof value === 'undefined'; };

/**
 * Concatenates multiple string arguments into a single string.
 * @function concat
 * @memberOf leaf
 * @param {string[]} args The arguments to concatenate.
 * @return {string} The concatenated string. 
 */
leaf.concat = function() { return Array.prototype.slice.call(arguments).join(""); };

