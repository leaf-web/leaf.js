/* 
   #session
   ========================================================================== */

/**
 * @namespace session
 * @memberOf leaf
 */
var session;

(function (session) {
	
	/**
	 * Get a value from session storage.
	 * @function get
	 * @memberOf leaf.session
	 * @param  {string} key    The key.
	 * @return {string|Object} The value.
	 */
    function get(key) {
    	var value = sessionStorage.getItem(key);

        if(leaf.isJSON(value)) {
         	return JSON.parse(value);
        }
        return value;

    }
    session.get = get;
    /**
     * Save a value to session storage.
     * @function set
     * @memberOf leaf.session
     * @param {string} key The key
	 * @param {string|Object} value The value.
     */
    function set(key, value) {
        if(leaf.isObject(value)) {
			sessionStorage.setItem(key, JSON.stringify(value));
        }
        else {
			sessionStorage.setItem(key, value);
        }
    }
    session.set = set;
    /**
     * Determines if a key exists in session storage.
     * @function contains
     * @memberOf leaf.session
     * @param  {string} key The key
     * @return {boolean} True if key exists.
     */
    function contains(key) {
    	return leaf.isDefined(sessionStorage.getItem(key));
    }
    session.contains = contains;

})(session = leaf.session || (leaf.session = {}));	