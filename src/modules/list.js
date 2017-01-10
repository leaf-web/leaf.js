/**
 * Represents a collection of Models.
 * @class List
 * @memberOf leaf
 * @since 0.1.0
 */
var List = (function() {
	/**
	 * The constructor function.
	 * @constructor
	 * @param {Object[]} [items] The Models to be added to the List.
 	 * @param {string} [items] The URL to a JSON file.
	 * @param {Function} [success] The success callback.
	 * @param {Function} [failure] The failure callback.
	 */
	function List(items, success, failure) {
		/**
		 * @var {Array} items The model Array.
		 * @memberOf leaf.List
		 * @since 0.1.0
		 */
		this.items = [];

		/**
		 * If items is undefined, break from the function.
		 */
		if(leaf.isUndefined(items)) {
			return;
		}
		/**
		 * If items is an Array, assume we are loading Models.
		 */
		if(leaf.isArray(items)) {
			this.merge(items);
		}
		/**
		 * If items is a string, assume we are loading a URL.
		 */
		if(leaf.isString(items)) {
			this.fetch(items, success, failure);
		}
	}
	/**
	 * Get the model at the specified index in the list.
	 * @function get
	 * @memberOf leaf.List
	 * @since 0.1.0
	 * @param {number} index The index.
	 * @return {Object} The model.
	 */
	List.prototype.get = function(index) {
		return this.items[index];
	};
	/**
	 * Get the first model in the list.
	 * @function first
	 * @memberOf leaf.List
	 * @since 1.0.0
	 * @return {Object} The model.
	 */
	List.prototype.first = function() {
		return this.items[0];
	};
	/**
	 * Get the last model in the list.
	 * @function last
	 * @memberOf leaf.List
	 * @since 1.0.0
	 * @return {Object} The model.
	 */
	List.prototype.last = function() {
		return this.items[this.items.length - 1];
	};
	/**
	 * Add a model to the list.
	 * @function add
	 * @memberOf leaf.List
	 * @since 0.1.0
	 * @param {Object} model The model.
	 */
	List.prototype.add = function(model) {
 		this.items.push(model);
	};
	/**
	 * Remove a model from the list at the specified index.
	 * @function remove
	 * @memberOf leaf.List
	 * @since 0.1.0
	 * @param {number} index The index.
	 */
	List.prototype.remove = function(index) {
		this.items.splice(index, 1);
	};
	/**
	 * Removes all the models in the list.
	 * @function clear
	 * @memberOf leaf.List
	 * @since 0.1.0
	 */
	List.prototype.clear = function() {
		this.items = [];
	};
	/**
	 * Sets a callback Function for the specified key.
	 * @function on
	 * @memberOf leaf.List
	 * @since 0.1.0
	 * @param {string} key The key.
	 * @param {Function} cb The callback Function.
	 */
	List.prototype.on = function(key, cb) {
		this.each(function(model) {
			model.on(key, cb);
		});
	};
	/**
	 * Fetch Models from your persistence layer or JSON file.
	 * @function fetch
	 * @memberOf leaf.List
	 * @since 1.0.0
	 * @param {string} url The URL.
	 * @param {Function} [success] The success callback.
	 * @param {Function} [failure] The failure callback.
	 */
	List.prototype.fetch = function(url, success, failure) {
		var that = this;

		leaf.http.get(url).then(
			function(data) {
				that.clear();
				that.merge(JSON.parse(data));

				if (leaf.isFunction(success)) {
					success(that);
				}
			},
			function(status) {
				if (leaf.isFunction(failure)) {
					failure(status);
				}
			}
		);
	};
	/**
	 * Merge Models from an Array.
	 * @function merge
	 * @memberOf leaf.List
	 * @since 1.0.0
	 * @param {Object[]} items The Models array.
	 */
	List.prototype.merge = function(items) {
		for(var item in items) {
			this.add(new leaf.Model(items[item]));
		}
	};
	/**
	 * Execute a callback Function for each model in the list.
	 * @function each
	 * @memberOf leaf.List
	 * @since 1.0.0
	 * @param {Function} cb The callback Function.
	 */
	List.prototype.each = function(cb) {
        for (var index in this.items) {
            cb(this.get(index), index);
        }
	};
	/**
	 * Return the number of models in the list.
	 * @function count
	 * @memberOf leaf.List
	 * @since 1.0.0
	 * @returns {number} The number of models.
	 */
	List.prototype.count = function(key) {
		return this.items.length;
	};
	/**
	 * Sort the models in the list.
	 * @function sort
	 * @memberOf leaf.List
	 * @since 0.1.0
	 * @param {Function} comparer The comparer function.
	 */
	List.prototype.sort = function(comparer) {
		this.items.sort(comparer);
	};
	/**
	 * Remove models that meet a condition.
	 * @function filter
	 * @memberOf leaf.List
	 * @since 1.0.0
	 * @param {Function} comparer The comparer function.
	 */
	List.prototype.filter = function(comparer) {
		this.items = this.items.filter(comparer);
	};
	/**
	 * Returns a model from a list where a condition is met.
	 * @function find
	 * @memberOf leaf.List
	 * @since 1.2.0
	 * @param {Function} comparer The comparer function.
	 */
	List.prototype.find = function(comparer) {
		return this.items.find(comparer);
	};
	/**
	 * Return a new instance of the model.
	 * @function clone
	 * @memberOf leaf.List
	 * @since 1.0.5
	 * @return {Object} The model instance.
	 */
	List.prototype.clone = function() {
		var output = new leaf.List();

		this.each(function(model) {
			output.add(model);
		});

		return output;
	};
	/**
	 * Reduce the models to a specific portion.
	 * @function slice
	 * @memberOf leaf.List
	 * @since 1.0.5
	 * @param {number} begin The index at which to begin extraction.
	 * @param {number} end The index at which to end extraction.
	 */
	List.prototype.slice = function(begin, end) {
        this.items = this.items.slice(begin, end);
	};
	/**
	 * Serialize the list to JSON format.
	 * @function toJSON
	 * @memberOf leaf.List
	 * @since 0.1.0
	 * @return {string} A JSON string.
	 */
	List.prototype.toJSON = function() {
		return this.items.map(function(model) {
			return model.toJSON();
		});
	};
	/**
	 * Returns the specified string with handle bars swapped for model values.
	 * @function template
	 * @memberOf leaf.List
	 * @since 0.1.0
	 * @param  {string} text The template string.
	 * @return {string} The output.
	 */
	List.prototype.template = function(text) {
		var target = '';
		/**
		 * Iterate through each model and build the template.
		 */
		this.each(function(model) {
			target += model.template(text);
		});

		return target;
	};
	/**
	 * Return the members of this class.
	 */
	return List;
})();

leaf.List = List;
