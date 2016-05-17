/* 
   #Model
   ========================================================================== */

/**
 * Represents a collection of Models.
 * @class List
 * @memberOf leaf
 */
var List = (function() {	
	/**
	 * Pass Models into the List.
	 * @constructor
	 * @param {Object[]} [items] The Models to pass.
	 */
	function List(items) {
		this.loadData(items || []);
	}
	/**
	 * Get the Model at the specified index in the List.
	 * @function get
	 * @memberOf leaf.List
	 * @param {number} index The index of the Model in the List.
	 * @return {Object} The Model.
	 */
	List.prototype.get = function(index) {
		return this._items[index];
	};
	/**
	 * Add a Model to the List.
	 * @function add
	 * @memberOf leaf.List
	 * @param {Object} model The Model.
	 */
	List.prototype.add = function(model) {
 		this._items.push(model);	
	};
	/**
	 * Remove a Model from the List at the specified index.
	 * @function remove
	 * @memberOf leaf.List
	 * @param {number} index The index of the Model.
	 */
	List.prototype.remove = function(index) {
		delete this._items[index];
	};
	/**
	 * Execute a callback Function for each Model in the List.
	 * @function each
	 * @memberOf leaf.List
	 * @param {Function} cb The callback Function.
	 */
	List.prototype.each = function(cb) {
        for (var index in this._items) {
            cb(this.get(index), index);
        }
	};
	/**
	 * Return the number of Models in the List.
	 * @function count
	 * @memberOf leaf.List
	 * @return {number} The number of Models.
	 */
	List.prototype.count = function() {
        return this._items.length;
	};		
	/**
	 * Sort the Models in the List.
	 * @function sort
	 * @memberOf leaf.List 
	 * @param {Function} comparer The comparer Function.
	 */
	List.prototype.sort = function(comparer) {
		this._items.sort(comparer);
	};
	/**
	 * Serialize the List to JSON format.
	 * @function toJSON
	 * @memberOf leaf.List 
	 * @return {string} A JSON string.
	 */
	List.prototype.toJSON = function() {
		return this._items.map(function(model) {
			return model.toJSON();
		});
	};
	/**
	 * Load an Array of Models into the List.
	 * @function loadData
	 * @memberOf leaf.List 
	 * @param {Object[]} items The Models to load.
	 * @param {boolean} [merge] If True, merge with existing Models.
	 */
	List.prototype.loadData = function(items, merge) {
		if(!merge) { this._items = []; }

		for(var item in items) {
			this.add(new leaf.Model(items[item]));
		}
	};
	/**
	 * Load a JSON file into the List.
	 * @function loadJSON
	 * @memberOf leaf.List 
	 * @param {string} url The url.
	 * @param {Function} [success] The success callback.
	 * @param {Function} [failure] The failure callback.
	 * @param {boolean} [merge] If True, merge with existing Models.
	 */
	List.prototype.loadJSON = function(url, success, failure, merge) {
		var that = this;

		leaf.http.get(url).then(function(data) {
			that.loadData(JSON.parse(data));

            if (leaf.isFunction(success)) {
                success(that);
            }
		}, function() {
            if (leaf.isFunction(failure)) {
                failure(that);
            }
		});
	};
	/**
	 * Return a List template with double-brackets replaced with values.
	 * @param  {string} text The source string.
	 * @return {string}      The target string.
	 */
	List.prototype.template = function(text) {
		var target = '';

		this.each(function(model) {
			target += model.template(text); 
		});

		return target;
	};
	return List;
})();

leaf.List = List;
