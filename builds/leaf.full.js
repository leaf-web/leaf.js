var leaf;
/**
 * @namespace leaf
 */
(function (leaf) {

	'use strict';
	/**
	 * The current version of Leaf.js
	 * @type {String}
	 * @memberOf leaf
	 * @since  1.0.6
	 */
	leaf.version = "1.0.10";

/**
 * Determines if a reference is a string.
 * @function isString
 * @memberOf leaf
 * @since  0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a string.
 */
leaf.isString = function(value) { return typeof value === "string" || value instanceof String; };
/**
 * Determines if a reference is a number.
 * @function isNumber
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a number.
 */
leaf.isNumber = function(value) { return typeof value === "number"; };
/**
 * Determines if a reference is a boolean.
 * @function isBoolean
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a boolean.
 */
leaf.isBoolean = function(value) { return typeof value === "boolean"; };
/**
 * Determines if a reference is an Array.
 * @function isArray
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is an Array.
 */
leaf.isArray = function(value) { return value.constructor === Array; };
/**
 * Determines if a reference is a function.
 * @function isFunction
 * @memberOf leaf
 * @since 0.1.0
 * @param  {*} value The reference to check.
 * @return {boolean} True if value is a Function.
 */
leaf.isFunction = function(value) { return typeof value === "function"; };
/**
 * Determines if a reference is an Object.
 * @function isObject
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is an Object.
 */
leaf.isObject = function(value) { return typeof value === "object"; };
/**
 * Determines if a reference is a Date.
 * @function isDate
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a Date.
 */
leaf.isDate = function(value) { return Object.prototype.toString.call(value) === "[object Date]"; };
/**
 * Determines if a reference is defined.
 * @function isDefined
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is defined.
 */
leaf.isDefined = function(value) { return typeof value !== "undefined"; };
/**
 * Determines if a reference is undefined.
 * @function isUndefined
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is undefined.
 */
leaf.isUndefined = function(value) { return typeof value === "undefined"; };
/**
 * Determines if a reference is null.
 * @function isDefined
 * @memberOf leaf
 * @since 0.1.0
 * @param {*} value The reference to check.
 * @return {boolean} True if value is null.
 */
leaf.isNull = function(value) { return value === null; };
/**
 * Concatenates multiple string arguments into a single string.
 * @function concat
 * @memberOf leaf
 * @since 0.1.0
 * @param {string[]} args The arguments to concatenate.
 * @return {string} The concatenated string.
 */
leaf.concat = function() { return Array.prototype.slice.call(arguments).join(""); };
/**
 * Does a simple, non-recursive, merge of two Objects.
 * @function merge
 * @memberOf leaf
 * @since 1.0.0
 * @param  {Object} source The source Object.
 * @param  {Object} target The target Object.
 * @return {Object} The Object.
 */
leaf.merge = function(obj, args) {
	for(var index in args) {
		if(typeof obj[index] == "undefined") {
			obj[index] = args[index];
		}
	}
	return obj;
};

/**
 * Return the value of a queryString parameter.
 * @function queryString
 * @memberOf leaf
 * @since 1.0.0
 * @param  {string} name The name.
 * @return {string}      The value.
 */
leaf.queryString = function(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
};


/*
   #http
   ========================================================================== */

/**
 * @namespace http
 * @memberOf leaf
 */
var http;

(function (http) {
	/**
	 * Executes a HTTP request.
	 * @function request
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {Object} options The request options.
	 * @param {Function} success The success Function.
	 * @param {Function} failure The failure Function.
	 */
	function request(options, success, failure) {
        var xhr = new XMLHttpRequest();
        /**
         * Open
         */
        xhr.open(options.method, options.url, true, options.username, options.password);
        /**
         * Headers
         */
        if (leaf.isDefined(options.headers)) {
        	for(var header in options.headers) {
        		xhr.setRequestHeader(header, options.headers[i]);
        	}
        }
        /**
         * Ready State
         */
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (leaf.isFunction(success)) {
                        success(xhr.responseText);
                    }
                }
	            else {
    	            if (leaf.isFunction(failure)) {
        	            failure(xhr.statusText);
            	    }
            	}
            }
        };

        xhr.send(options.data || null);
	}
	http.request = request;

	/**
	 * Shorthand function to execute a HTTP GET request.
	 * @function get
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {Object} options The request options.
	 */
    function get(url, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'GET',
        	url: url
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.get = get;

	/**
	 * Shorthand function to execute a HTTP DELETE request.
	 * @function del
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {Object} options The request options.
	 */
    function del(url, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'DELETE',
        	url: url
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.del = del;

	/**
	 * Shorthand function to execute a HTTP HEAD request.
	 * @function head
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {Object} options The request options.
	 */
    function head(url, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'HEAD',
        	url: url
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.head = head;

	/**
	 * Shorthand function to execute a HTTP JSONP request.
	 * @function jsonp
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {Object} options The request options.
	 */
    function jsonp(url, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'JSONP',
        	url: url
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.jsonp = jsonp;

	/**
	 * Shorthand function to execute a HTTP POST request.
	 * @function post
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {*} data The data.
	 * @param {Object} options The request options.
	 */
    function post(url, data, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'POST',
        	url: url,
        	data: data
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.post = post;

	/**
	 * Shorthand function to execute a HTTP PUT request.
	 * @function put
	 * @memberOf leaf.http
 	 * @since 1.0.8
	 * @param {string} url The URL.
	 * @param {*} data The data.
	 * @param {Object} options The request options.
	 */
    function put(url, data, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'PUT',
        	url: url,
        	data: data
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.put = put;

	/**
	 * Shorthand function to execute a HTTP PATCH request.
	 * @function patch
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {*} data The data.
	 * @param {Object} options The request options.
	 */
    function patch(url, data, options) {
        var defaults = leaf.merge(options || {}, {
        	method: 'PATCH',
        	url: url,
        	data: data
        });
        return {
            then: function (success, failure) {
                leaf.http.request(defaults, success, failure);
            }
        };
    }
    http.patch = patch;

	/**
	 * Shorthand function to execute a HTTP GET request and put the content in an element.
	 * @function include
	 * @memberOf leaf.http
 	 * @since 0.1.0
	 * @param {string} url The URL.
	 * @param {string} selector The selector string.
	 * @param {Function} success The success Function.
	 * @param {Function} failure The failure Function.
	 */
    function include(url, selector, success, failure) {
    	var el = document.querySelector(selector);

    	leaf.http.get(url).then(
    		function(data) {
    			el.innerHTML = data;

   				if (leaf.isFunction(success)) {
					success(data);
				}
    		},
   			function(status) {
   				if (leaf.isFunction(failure)) {
					failure(status);
				}
   			}
    	);
    }
    http.include = include;

})(http = leaf.http || (leaf.http = {}));

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
	 * Merge Models from a JSON file.
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
		  * This argument is only accepted for Model.clone() to work.
		  */
		 this._cbs = cbs || {};

		 this.url='';
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
	 * Return the members of this class.
	 */
	return Model;
})();

leaf.Model = Model;

/**
 * Represents a view, component, or HTML fragment.
 * @class View
 * @memberOf leaf
 * @since 0.1.0
 */
var View = (function() {
	/**
	 * The constructor function.
	 * @constructor
	 * @param {Object} options The options.
	 */
	function View(options) {
		this.options = options;
	}
	/**
	 * Render the view on the webpage.
	 * @function render
	 * @memberOf leaf.View
	 * @since 0.1.0
	 * @param  {string} selector The selector.
	 * @param  {Object} props The properties.
	 */
	View.prototype.render = function (selector, props) {
		/**
		 * Create a reference to the View.
		 */
		var that = this;
		/**
		 * Store the options.
		 */
		this.options.selector = selector;
		this.options.props = props;
		/**
		 * Render the view.
		 */
		if (leaf.isFunction(that.options.draw)) {
            this.each(function (el) {
                el.innerHTML = that.options.draw(el);
            });
		}
	};
	/**
	 * Returns a property in the props collection.
	 * @function props
	 * @memberOf leaf.View
	 * @since 0.1.0
	 * @return {Object} The data option.
	 */
	View.prototype.props = function() {
		return this.options.props;
	};
	/**
	 * Execute a callback for each match in the selector.
	 * @function each
	 * @memberOf leaf.View
	 * @since 0.1.0
	 * @param  {Function} cb The callback function.
	 */
	View.prototype.each = function(cb) {
        /**
         * Match on options.selector.
         */
        var els = document.querySelectorAll(this.options.selector);
        /**
         * Execute the callback for each.
         */
        for (var index = 0, length = els.length; index < length; index++) {
	        cb(els[index]);
        }
	};
	/**
	 * Return the members of this class.
	 */
	return View;
})();

leaf.View = View;


/**
 * Represents a collection of routes
 * @class Router
 * @memberOf leaf
 * @since 0.1.0
 */
var Router = (function() {
	/**
	 * The constructor function.
	 * @constructor
	 * @param {Object} [routes] The routes to be added to the Router.
	 */
	function Router(routes) {
		/**
		 * @var {Object} routes The route collection.
		 * @memberOf leaf.Router
		 * @since 0.1.0
		 */
		this.routes = routes || {};
	}
	/**
	 * Adds a route to the Router.
	 * @function add
 	 * @memberOf leaf.Router
 	 * @since 0.1.0
	 * @param {string} path The path.
	 * @param {Function} cb The callback function.
	 */
	Router.prototype.add = function(path, cb) {
		this.routes[path] = cb;
	};
	/**
	 * Get the callback Function of a route in the Router.
	 * @function get
 	 * @memberOf leaf.Router
 	 * @since 0.1.0
	 * @param {string} path The path.
	 */
	Router.prototype.get = function(path) {
		return this.routes[path];
	};
	/**
	 * Remove a route from the router by its path.
	 * @function clear
	 * @memberOf leaf.Router
	 * @since 0.1.0
	 * @param {string} hash The hash.
	 */
	Router.prototype.remove = function(path) {
		delete this.routes[path];
	};
	/**
	 * Removes all the routes in the router.
	 * @function clear
	 * @memberOf leaf.Router
	 * @since 0.1.0
	 */
	Router.prototype.clear = function() {
		this.routes = {};
	};
	/**
	 * Determine if the specified path exists in the Router.
	 * @function contains
 	 * @memberOf leaf.Router
 	 * @since 0.1.0
	 * @param {string} hash The hash.
	 * @return {boolean} True if the path exists.
	 */
	Router.prototype.contains = function(path) {
		return path in this.routes;
	};
	/**
	 * Execute a callback Function for each route in the router.
	 * @function each
	 * @memberOf leaf.Router
	 * @since 1.0.0
	 * @param {Function} cb The callback Function.
	 */
	Router.prototype.each = function(cb) {
        for (var route in this.routes) {
            cb(route, this.get(route));
        }
	};
	/**
	 * Return the number of routes in the Router.
	 * @function count
	 * @memberOf leaf.Model
	 * @since 1.0.0
	 * @return {number} The number of routes.
	 */
	Router.prototype.count = function() {
		return Object.keys(this.routes).length;
	};
	/**
	 * Begin listening for hash changes to invoke routes.
	 * @function listen
 	 * @memberOf leaf.Router
 	 * @since 0.1.0
	 */
	Router.prototype.listen = function() {
        var that = this;

        window.addEventListener("load", function () {
            that.call(window.location.hash);
        });

        window.addEventListener("hashchange", function () {
            that.call(window.location.hash);
        });
	};
	/**
	 * Stop listening for hash changes.
	 * @function ignore
 	 * @memberOf leaf.Router
 	 * @since 0.1.0
	 */
	Router.prototype.ignore = function() {
        var that = this;

        window.removeEventListener("load", function () {
            that.call(window.location.hash);
        });

        window.removeEventListener("hashchange", function () {
            that.call(window.location.hash);
        });
	};
	/**
	 * Execute a route's callback Function on a match.
	 * @function call
 	 * @memberOf leaf.Router
 	 * @since 0.1.0
	 * @param {string} hash The hash.
	 */
	Router.prototype.call = function(path) {
		for (var route in this.routes) {
			/**
			 * Match routes while ignoring parameters.
			 */
			var match  = path.match(new RegExp(route.replace(/:([^\/]+)/g, "([^\/]*)")));
			var params = {};
			var keys   = route.match(/:([^\/]+)/g);

			/* jshint ignore:start */

			if(match) {
				match.shift();
				/**
				 * Make a key-value object with parameters.
				 */
				match.forEach(function(value, index) {
					params[keys[index].replace(":", "")] = value;
				});
				/**
				 * Make a key-value object with parameters.
				 */
				this.get(route)(params);
				return;
			}

			/* jshint ignore:end */
		}
	};
	/**
	 * Return the members of this class.
	 */
	return Router;
})();

leaf.Router = Router;

/* 
   #JsonRepeaterControl
   ========================================================================== */

/**
 * Control to return a template from a single Model.
 * @class JsonModelerControl
 * @memberOf leaf
 */
leaf.JsonModelerControl = new leaf.View({
	//
	// Return the innerHTML of the view.
	//
	draw: function(el) {
		var that = this;
		var html = el.innerHTML;
		//
		// Draw the template.
		// 
		leaf.http.get(this.props.url).then( 
			function(data) {
				var Model = new leaf.Model(JSON.parse(data));
				
               	el.innerHTML = Model.template(html);
				/**
				 * Success
				 */
				if (leaf.isFunction(that.props.success)) { 
					that.props.success(data); 
				}
			},
			function(status) {
				el.innerHTML = '';
				/**
				 * Failure
				 */
				if (leaf.isFunction(that.props.failure)) { 
					that.props.failure(status); 
				}
			}		
		);
		/**
		 * Return loading text if specified.
		 */
		return this.props.text || ''; 
	}
});

/*
   #JsonRepeaterControl
   ========================================================================== */

/**
 * Repeat through each model in a JSON file, and replace double-brackets with values.
 * @class JsonRepeaterControl
 * @memberOf leaf
 */
leaf.JsonRepeaterControl = new leaf.View({
	//
	// Return the innerHTML of the view.
	//
	draw: function(el) {
		var that = this;
		var html = el.innerHTML;
		//
		// Draw the template.
		//
		var List = new leaf.List(this.props.url,
			function(data) {
				/**
				 * Transform
				 */
				if(leaf.isFunction(that.props.transform)) {
					data = that.props.transform(data);
				}
				/**
				 * Draw
				 */
				el.innerHTML = data.template(html);
				/**
				 * Success
				 */
				if (leaf.isFunction(that.props.success)) {
					that.props.success(data);
				}
			},
			function(status) {
				el.innerHTML = '';
				/**
				 * Failure
				 */
				if (leaf.isFunction(that.props.failure)) {
					that.props.failure(status);
				}
			}
		);
		/**
		 * Return loading text if specified.
		 */
		return this.props.text || '';
	}
});

/* 
   #ListRepeaterControl
   ========================================================================== */

/**
 * Repeat through each model in a List, and replace double-brackets with values.
 * @class ListRepeaterControl
 * @memberOf leaf
 * @since 0.1.0
 */
leaf.ListRepeaterControl = new leaf.View({
	//
	// Return the innerHTML of the view.
	//
	draw: function(el) {
		return this.props.data.template(el.innerHTML); 
	}
});
})(leaf || (leaf = {}));