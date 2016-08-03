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
		 * @var {Array} items The Models collection. 
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
	 * Get the Model at the specified index in the List.
	 * @function get
	 * @memberOf leaf.List
	 * @since 0.1.0
	 * @param {number} index The index.
	 * @return {Object} The Model.
	 */
	List.prototype.get = function(index) {
		return this.items[index];
	};
	/**
	 * Get the first Model in the List.
	 * @function first
	 * @memberOf leaf.List
	 * @since 1.0.0
	 * @return {Object} The Model.
	 */
	List.prototype.first = function() {
		return this.items[0];
	};
	/**
	 * Get the last Model in the List.
	 * @function last
	 * @memberOf leaf.List
	 * @since 1.0.0
	 * @return {Object} The Model.
	 */
	List.prototype.last = function() {
		return this.items[this.items.length - 1];
	};
	/**
	 * Add a Model to the List.
	 * @function add
	 * @memberOf leaf.List
	 * @since 0.1.0
	 * @param {Object} model The Model.
	 */
	List.prototype.add = function(model) {
 		this.items.push(model);	
	};
	/**
	 * Remove a Model from the List at the specified index.
	 * @function remove
	 * @memberOf leaf.List
	 * @since 0.1.0
	 * @param {number} index The index of the Model.
	 */
	List.prototype.remove = function(index) {
		this.items.splice(index, 1);
	};
	/**
	 * Removes all the Models in the List.
	 * @function clear
	 * @memberOf leaf.List 
	 * @since 0.1.0
	 */
	List.prototype.clear = function() {
		this.items = [];
	};	
	/**
	 * Merge the Models with Models from a flat JSON file.
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
	 * Merge the Models from an Array with this one.
	 * @function merge
	 * @memberOf leaf.List 
	 * @since 1.0.0
	 * @param {Object[]} items The Models to merge.
	 */
	List.prototype.merge = function(items) {
		for(var item in items) {
			this.add(new leaf.Model(items[item]));
		}
	};
	/**
	 * Execute a callback Function for each Model in the List.
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
	 * Return the number of Model in the List.
	 * @function count
	 * @memberOf leaf.List
	 * @since 1.0.0
	 */
	List.prototype.count = function(key) {
		return this.items.length;
	};	
	/**
	 * Sort the Models in the List.
	 * @function sort
	 * @memberOf leaf.List 
	 * @since 0.1.0
	 * @param {Function} comparer The comparer Function.
	 */
	List.prototype.sort = function(comparer) {
		this.items.sort(comparer);
	};
	/**
	 * Remove Models that meet a condition.
	 * @function filter
	 * @memberOf leaf.List 
	 * @since 1.0.0
	 * @param {Function} comparer The comparer Function.
	 */
	List.prototype.filter = function(comparer) {
		this.items = this.items.filter(comparer);
	};		
	/**
	 * Serialize the List to JSON format.
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
	 * Return a List template with double-brackets replaced with values.
	 * @function template
	 * @memberOf leaf.List 
	 * @since 0.1.0
	 * @param  {string} text The source string.
	 * @return {string} The target string.
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
