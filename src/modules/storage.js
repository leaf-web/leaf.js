/* 
   #storage
   ========================================================================== */

/**
 * @namespace storage
 * @memberOf leaf
 */
var storage;

(function (storage) {
	
	/**
	 * Get a value from local storage.
	 * @function get
	 * @memberOf leaf.storage
	 * @param  {string} key    The key.
	 * @return {string|Object} The value.
	 */
    function get(key) {
    	var value = localStorage.getItem(key);

        if(leaf.isJSON(value)) {
         	return JSON.parse(value);
        }
        return value;

    }
    storage.get = get;
    /**
     * Save a value to local storage.
     * @function set
     * @memberOf leaf.storage
     * @param {string} key The key
	 * @param {string|Object} value The value.
     */
    function set(key, value) {
        if(leaf.isObject(value)) {
			localStorage.setItem(key, JSON.stringify(value));
        }
        else {
			localStorage.setItem(key, value);
        }
    }
    storage.set = set;
    /**
     * Determines if a key exists in local storage.
     * @function contains
     * @memberOf leaf.storage
     * @param  {string} key The key
     * @return {boolean} True if key exists.
     */
    function contains(key) {
    	return leaf.isDefined(localStorage.getItem(key));
    }
    storage.contains = contains;

})(storage = leaf.storage || (leaf.storage = {}));	