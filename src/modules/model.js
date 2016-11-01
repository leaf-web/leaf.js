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
	 * @param {Object} [items] The initial items to be added.
	 */
	function Model(items, cbs) {
		/**
		 * @var {Object} items The key-value collection. Do not
		 * modify this directly.
		 * @memberOf leaf.Model
		 * @since 0.1.0
		 */
		 this.items = items || {};
		 /**
		  * @var {string} url The url to the services layer.
		 * @memberOf leaf.Model
		 * @since 1.1.0
		  */
		 this.url = '';
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
	 * Set the value of the specified key in the model.
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
	 * Remove the specified key from the model.
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
	 * Remove all the attributes from the model.
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
	 * Determines if the specified key exists in the model.
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
	 * Merge attributes from an Object.
	 * @function merge
	 * @memberOf leaf.Model
	 * @since 1.0.8
	 * @param {Object[]} items The Models array.
	 */
	Model.prototype.merge = function(items)	 {
		for(var item in items) {
			this.set(item, items[item]);
		}
	};
	/**
	 * Execute a callback Function for each attribute in the model.
	 * @function each
	 * @memberOf leaf.Model
	 * @since 0.1.0
	 * @param {Function} cb The callback function.
	 */
	Model.prototype.each = function(cb) {
		for (var key in this.items) {
            cb(key, this.get(key));
        }
	};
	/**
	 * Return the number of keys in the model.
	 * @function count
	 * @memberOf leaf.Model
	 * @since 1.0.0
	 * @return {number} The number of keys.
	 */
	Model.prototype.count = function() {
		return Object.keys(this.items).length;
	};
	/**
	 * Return a new instance of the model.
	 * @function clone
	 * @memberOf leaf.Model
	 * @since 1.0.0
	 * @return {Object} The new Model.
	 */
	Model.prototype.clone = function() {
		return new Model(this.items, this._cbs);
	};
	/**
	 * Returns the model as a JSON string.
	 * @function toJSON
	 * @memberOf leaf.Model
	 * @since 0.1.0
	 * @return {string} A JSON string.
	 */
	Model.prototype.toJSON = function() {
		return JSON.stringify(this.items);
	};
	/**
	 * Returns the specified string with handle bars swapped for model values.
	 * @function template
	 * @memberOf leaf.Model
	 * @since 0.1.0
	 * @param {string} text The template string.
	 * @return {string} The output.
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
	 * Fetch a model from the services layer.
	 * @function fetch
	 * @memberOf leaf.Model
	 * @since 1.1.0
	 * @param {number} id The id.
	 * @param {Function} success The success Function.
	 * @param {Function} failure The failure Function.
	 */
	Model.prototype.fetch = function(id, success, failure) {
		var that = this;

		leaf.http.get(this.url + '/' + id, {
            headers: {
                "content-type": "application/json"
            }
		}).then(function(data) {
			that.clear();
			that.merge(JSON.parse(data)[0]);

			if (leaf.isFunction(success)) {
				success(data);
			}
		}, function(status) {
			if (leaf.isFunction(success)) {
				failure(status);
			}
		});
	};
	/**
	 * Create a model in the services layer.
	 * @function save
	 * @memberOf leaf.Model
	 * @since 1.1.0
	 * @param {Function} success The success Function.
	 * @param {Function} failure The failure Function.
	 */
	Model.prototype.save = function(success, failure) {
		leaf.http.post(this.url, this.toJSON(), {
            headers: {
                "content-type": "application/json"
            }
		}).then(function(response) {
			if (leaf.isFunction(success)) {
				success(response);
			}
		}, function(status) {
			if (leaf.isFunction(success)) {
				failure(status);
			}
		});
	};
	/**
	 * Update a model in the services layer.
	 * @function update
	 * @memberOf leaf.Model
	 * @since 1.1.0
	 * @param {number} id The id.
	 * @param {Function} success The success Function.
	 * @param {Function} failure The failure Function.
	 */
	Model.prototype.update = function(id, success, failure) {
		leaf.http.put(this.url + '/' + id, this.toJSON(), {
            headers: {
                "content-type": "application/json"
            }
		}).then(function(response) {
			if (leaf.isFunction(success)) {
				success(response);
			}
		}, function(status) {
			if (leaf.isFunction(success)) {
				failure(status);
			}
		});
	};
	/**
	 * Destroy a model in the services layer.
	 * @function save
	 * @memberOf leaf.Model
	 * @since 1.1.0
	 * @param {number} id The id.
	 * @param {Function} success The success Function.
	 * @param {Function} failure The failure Function.
	 */
	Model.prototype.destroy = function(id, success, failure) {
		leaf.http.del(this.url + '/' + id, {
            headers: {
                "content-type": "application/json"
            }
		}).then(function(response) {
			if (leaf.isFunction(success)) {
				success(response);
			}
		}, function(status) {
			if (leaf.isFunction(success)) {
				failure(status);
			}
		});
	};
	/**
	 * Return the members of this class.
	 */
	return Model;
})();

leaf.Model = Model;
