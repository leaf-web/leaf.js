/**
 * Determines if a reference is a string.
 * @function isString
 * @memberOf leaf
 * @since  0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a string.
 */
leaf.isString = function(value) { return typeof value === 'string' || value instanceof String; };
/**
 * Determines if a reference is a number.
 * @function isNumber
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a number.
 */
leaf.isNumber = function(value) { return typeof value === 'number'; };
/**
 * Determines if a reference is a boolean.
 * @function isBoolean
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a boolean.
 */
leaf.isBoolean = function(value) { return typeof value === 'boolean'; };
/**
 * Determines if a reference is an Array.
 * @function isArray
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is an Array.
 */
leaf.isArray = function(value) { return value.constructor === Array; };
/**
 * Determines if a reference is a function.
 * @function isFunction
 * @memberOf leaf
 * @since 0.1.0
 * @param  {*} value The reference to check.
 * @return {boolean} True if value is a Function.
 */
leaf.isFunction = function(value) { return typeof value === 'function'; };
/**
 * Determines if a reference is an Object.
 * @function isObject
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is an Object.
 */
leaf.isObject = function(value) { return typeof value === 'object'; };
/**
 * Determines if a reference is a Date.
 * @function isDate
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a Date.
 */
leaf.isDate = function(value) { return Object.prototype.toString.call(value) === '[object Date]'; };
/**
 * Determines if a reference is defined.
 * @function isDefined
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is defined.
 */
leaf.isDefined = function(value) { return typeof value !== 'undefined'; };
/**
 * Determines if a reference is undefined.
 * @function isUndefined
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is undefined.
 */
leaf.isUndefined = function(value) { return typeof value === 'undefined'; };
/**
 * Determines if a reference is null.
 * @function isDefined
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is null.
 */
leaf.isNull = function(value) { return value === null; };
/**
 * Concatenates multiple string arguments into a single string.
 * @function concat
 * @memberOf leaf
 * @since 0.1.0
 * @param {string[]} args The arguments to concatenate.
 * @return {string} The concatenated string.
 * @example
 * 	<html>	
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>	
				console.log(leaf.concat("John", " ", "Doe")); //returns "John Doe"
			</script>
		</body>
	</html>	
 */
leaf.concat = function() { return Array.prototype.slice.call(arguments).join(""); };
/**
 * Does a simple, non-recursive, merge of two Objects.
 * @function merge
 * @memberOf leaf
 * @since 1.0.0
 * @param  {Object} source The source Object.
 * @param  {Object} target The target Object.
 * @return {Object} The Object.
 */
leaf.merge = function(obj, args) {
	for(var index in args) {
		if(typeof obj[index] == "undefined") {
			obj[index] = args[index];
		}
	}
	return obj;
};

/**
 * Return the value of a queryString parameter.
 * @function queryString
 * @memberOf leaf
 * @since 1.0.0
 * @param  {string} name The name.
 * @return {string}      The value.
 */
leaf.queryString = function(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null; 
};

