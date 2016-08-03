/**
 * Represents a Model.
 * @class Model
 * @memberOf leaf
 * @since 0.1.0
 */
var Model = (function() {
	/**
	 * The constructor function.
	 * @constructor
	 * @param {Object} [items] The items to be added to the Model.
	 */
	function Model(items, cbs) {
		/**
		 * @var {Object} items The items collection. Do not modify directly.
		 * @memberOf leaf.Model
		 * @since 0.1.0
		 */
		 this.items = items || {};
		 /**
		  * This argument is only accepted for Model.clone() to work.
		  */
		 this._cbs = cbs || {};
	}
	/**
	 * Determines if a Model's value changed.
	 * @var {Boolean} changed
	 * @memberOf leaf.Model
	 * @since 1.0.0
 	 * @return {boolean} True if a value was changed.
	 */
	Model.prototype.changed = false;
	/**
	 * Get the value of the specified key in the Model.
	 * @function get
	 * @memberOf leaf.Model
	 * @since 0.1.0
	 * @param {string} key The key.
	 * @return {*} The value.
	 */
	Model.prototype.get = function(key) {
		return this.items[key];
	};
	/**
	 * Set the value of the specified key in the Model.
	 * @function set
	 * @memberOf leaf.Model
	 * @since 0.1.0
	 * @param {string} key The key.
	 * @param {*} value The value.
	 */
	Model.prototype.set = function(key, value) {
		this.items[key] = value;
		/**
		 * Set the changed property to true.
		 */
		this.changed = true;
		/**
		 * Execute a callback when the value changes.
		 */
		if(key in this._cbs) {
			this._cbs[key](value);
		}
	};
	/**
	 * Remove the specified key from the Model.
	 * @function remove
	 * @memberOf leaf.Model
	 * @since 0.1.0
	 * @param {string} key The key.
	 */
	Model.prototype.remove = function(key) {
		delete this.items[key];
		/**
		 * Delete the callback since the key was removed.
		 */
		if(key in this._cbs) {
			delete this._cbs[key];
		}
	};	
	/**
	 * Remove all the keys from the Model.
	 * @function clear
	 * @since 1.0.0
	 * @memberOf leaf.Model
	 */	
	Model.prototype.clear = function() {
		this.items = {};
		this._cbs = {};
	};
	/**
	 * Sets a callback Function for the specified key. 
	 * @function on
	 * @memberOf leaf.Model
	 * @since 0.1.0
	 * @param {string} key The key.
	 * @param {Function} cb The callback Function.
	 */
	Model.prototype.on = function(key, cb) {
		this._cbs[key] = cb;
	};
	/**
	 * Removes the specified key's callback function. 
	 * @function un
	 * @memberOf leaf.Model
	 * @since 0.1.0
	 * @param {string} key The key.
	 */	
	Model.prototype.un = function(key) {
		delete this._cbs[key];
	};
	/**
	 * Determines if the specified key exists in the Model.
	 * @function contains
	 * @memberOf leaf.Model
	 * @since 0.1.0
	 * @param {string} key The key.
	 * @return {boolean} True if the key is found.
	 */
	Model.prototype.contains = function(key) {
		return key in this.items;
	};
	/**
	 * Execute a callback Function for each key in the Model.
	 * @function each
	 * @memberOf leaf.Model
	 * @since 0.1.0
	 * @param {Function} cb The callback Function.
	 */
	Model.prototype.each = function(cb) {
		for (var key in this.items) {
            cb(key, this.get(key));
        }
	};
	/**
	 * Return the number of keys in the Model.
	 * @function count
	 * @memberOf leaf.Model
	 * @since 1.0.0
	 */	
	Model.prototype.count = function() {
		return Object.keys(this.items).length;
	};
	/**
	 * Return a new instance of this Model.
	 * @function clone
	 * @memberOf leaf.Model
	 * @since 1.0.0
	 * @return {Object} The new Model.
	 */
	Model.prototype.clone = function() {
		return new Model(this.items, this._cbs);
	};
	/**
	 * Returns the Model as a JSON string.
	 * @function toJSON
	 * @memberOf leaf.Model
	 * @since 0.1.0
	 * @return {string} A JSON string.
	 */
	Model.prototype.toJSON = function() {
		return JSON.stringify(this.items);
	};
	/**
	 * Returns the specified string with handle bars swapped for Model values.
	 * @function template
	 * @memberOf leaf.Model
	 * @since 0.1.0
	 * @return {string} The string containing the handlebars.
	 */
	Model.prototype.template = function(text) {
		/**
		 * Iterate through each key in the Model to build the output.
		 */
		this.each(function(key, value) {
			text = text.replace(new RegExp('{{' + key + '}}', 'g'), value || '');
		});

		return text;
	};
	/**
	 * Return the members of this class.
	 */
	return Model;
})();

leaf.Model = Model;