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
	 * @param  {string} name The name.
	 * @return {string} The value.
	 */
	function param(name) {
		return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null; 
	}
	request.param = param;
	/**
	 * Return a value from the pathname.
	 * @function path
	 * @memberOf leaf.request
	 * @param  {number} index The index.
	 * @return {string} The value.
	 */
	function path(index) {
		return window.location.pathname.split('/')[index];
	}
	request.path = path;

})(http = leaf.request || (leaf.request = {}));