/* 
   #Model
   ========================================================================== */

/**
 * Represents a collection of Models.
 * @class Model
 * @memberOf leaf
 */
var Model = (function() {	
	/**
	 * Pass an Object to the Model that contains key-value pairs.
	 * @constructor
	 * @param {Object} [items] The items to be added to the Model.
	 */
	function Model(items) {
		/**
		 * @var {Object} items The raw item collection. Do not modify directly.
		 * @memberOf leaf.Model
		 */
		this.items = items || {}; 
		this._cbs = {};
	}

	/**
	 * Get the value of the specified key in the Model.
	 * @function get
	 * @memberOf leaf.Model
	 * @param {string}	key The key.
	 * @return {*} The value.
	 */
	Model.prototype.get = function(key) {
		return this.items[key];
	};
	/**
	 * Set the value of the specified key in the Model.
	 * @function set
	 * @memberOf leaf.Model
	 * @param {string} key The key.
	 * @param {*} value The value.
	 */
	Model.prototype.set = function(key, value) {
		this.items[key] = value;
		
		if (key in this._cbs) {
			this._cbs[key](value);
		}		
	};
	/**
	 * Remove the specified key from the Model.
	 * @function delete
	 * @memberOf leaf.Model
	 * @param {string} key The key.
	 */
	Model.prototype.remove = function(key) {
		delete this.items[key];
	};
	/**
	 * Determine if the specified key exists in the Model.
	 * @function contains
	 * @memberOf leaf.Model
	 * @param {string} key The key.
	 * @return {boolean} True if the key is found.
	 */
	Model.prototype.contains = function(key) {
		return key in this._items;
	};
	/**
	 * Set a callback Function for when the specified key.
	 * @function on
	 * @memberOf leaf.Model
	 * @param {string} key The key.
	 * @param {Function} cb The callback Function.
	 */
	Model.prototype.on = function(key, cb) {
		this._cbs[key] = cb;
	};
	/**
	 * Remove the callback Function for the specified key.
	 * @function un
	 * @memberOf Model
	 * @param {string} key The key.
	 */
	Model.prototype.un = function(key) {
		delete this._cbs[key];
	};
	/**
	 * Execute a callback Function for each key in the Model.
	 * @function each
	 * @memberOf leaf.Model
	 * @param {Function} cb The callback Function.
	 */
	Model.prototype.each = function(cb) {
		for (var key in this.items) {
            cb(key, this.get(key));
        }
	};
	/**
	 * Serialize the Model to JSON format. 
	 * @function toJSON
	 * @memberOf leaf.Model
	 * @return {string} A JSON string.
	 */
	Model.prototype.toJSON = function() {
		return JSON.stringify(this.items);
	};	
	/**
	 * Return a Model template with double-brackets replaced with values.
	 * @function template
	 * @memberOf leaf.Model
	 * @param {string} text The source string.
	 * @return {string} The target string.
	 */
	Model.prototype.template = function(text) {
		this.each(function(key, value) {
			text = text.replace('{{' + key + '}}', value || '');
		});
		return text;
	};
	return Model;
})();

leaf.Model = Model;
