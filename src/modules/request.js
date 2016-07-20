/* 
   #request
   ========================================================================== */

/**
 * @namespace request
 * @memberOf leaf
 */
var request;

(function (request) {
	/**
	 * Return a value from the querystring.
	 * @function param
	 * @memberOf leaf.request
	 * @since  0.1.0
	 * @param  {string} name The name.
	 * @return {string} The value.
	 */
	function param(name) {
		return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null; 
	}

	request.param = param;

})(http = leaf.request || (leaf.request = {}));