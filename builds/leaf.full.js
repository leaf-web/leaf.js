/* ==========================================================================
   #LEAF.JS
   ========================================================================== */

var leaf;
/**
 * @namespace leaf
 */
(function (leaf) {	

	'use strict';
/* 
   #functions
   ========================================================================== */

/**
 * Determines if a reference is a number.
 * @function isNumber
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a number.
 */
leaf.isNumber = function(value) { return typeof value === 'number'; };

/**
 * Determines if a reference is a boolean.
 * @function isBoolean
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a boolean.
 */
leaf.isBoolean = function(value) { return typeof value === 'boolean'; };

/**
 * Determines if a reference is an Array.
 * @function isArray
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is an Array.
 */
leaf.isArray = function(value) { return value.constructor === Array; };

/**
 * Determines if a reference is a Function.
 * @function isFunction
 * @memberOf leaf
 * @param  {*} value The reference to check.
 * @return {boolean} True if value is a Function.
 */
leaf.isFunction = function(value) { return typeof value === 'function'; };

/**
 * Determines if a reference is an Object.
 * @function isObject
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is an Object.
 */
leaf.isObject = function(value) { return typeof value === 'object'; };

/**
 * Determines if a reference is a Date.
 * @function isDate
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is a Date.
 */
leaf.isDate = function(value) { return Object.prototype.toString.call(value) === '[object Date]'; };

/**
 * Determines if a reference is defined.
 * @function isDefined
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is defined.
 */
leaf.isDefined = function(value) { return typeof value !== 'undefined'; };

/**
 * Determines if a reference is undefined.
 * @function isUndefined
 * @memberOf leaf
 * @param {*} value The reference to check.
 * @return {boolean} True if value is undefined.
 */
leaf.isUndefined = function(value) { return typeof value === 'undefined'; };

/**
 * Concatenates multiple string arguments into a single string.
 * @function concat
 * @memberOf leaf
 * @param {string[]} args The arguments to concatenate.
 * @return {string} The concatenated string. 
 */
leaf.concat = function() { return Array.prototype.slice.call(arguments).join(""); };

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
	 * @param {Object} options The request options.
	 * @param {Function} success The success Function.
	 * @param {Function} failure The failure Function.
	 */
	function request(options, success, failure) {
        var xhr = new XMLHttpRequest();

        xhr.open(options.method, options.url, true, options.username, options.password);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (leaf.isFunction(success)) {
                        success(xhr.responseText);
                    }
                }
            }
            else {
                if (leaf.isFunction(failure)) {
                    failure(xhr.statusText);
                }
            }
        };

        xhr.send(options.data);
	}

	http.request = request;

	/**
	 * Shorthand function to execute a HTTP GET request.	 
	 * @function get
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 */
    function get(url) {
        var options = { method: 'GET', url: url };
        return {
            then: function (success, failure) {
                leaf.http.request(options, success, failure);
            }
        };
    }
    http.get = get;

	/**
	 * Shorthand function to execute a HTTP DELETE request.
	 * @function del
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 */
    function del(url) {
        var options = { method: 'DELETE', url: url };
        return {
            then: function (success, failure) {
                leaf.http.request(options, success, failure);
            }
        };
    }
    http.del = del;

	/**
	 * Shorthand function to execute a HTTP HEAD request.
	 * @function head
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 */
    function head(url) {
        var options = { method: 'HEAD', url: url };
        return {
            then: function (success, failure) {
                leaf.http.request(options, success, failure);
            }
        };
    }
    http.head = head;

	/**
	 * Shorthand function to execute a HTTP JSONP request.
	 * @function jsonp
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 */
    function jsonp(url) {
        var options = { method: 'JSONP', url: url };
        return {
            then: function (success, failure) {
                leaf.http.request(options, success, failure);
            }
        };
    }
    http.jsonp = jsonp;

	/**
	 * Shorthand function to execute a HTTP POST request.
	 * @function post
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 * @param {*} data The data.	  
	 */
    function post(url, data) {
        var options = { method: 'POST', url: url, data: data };
        return {
            then: function (success, failure) {
                leaf.http.request(options, success, failure);
            }
        };
    }
    http.post = post;

	/**
	 * Shorthand function to execute a HTTP PATCH request.
	 * @function patch
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 * @param {*} data The data.
	 */
    function patch(url, data) {
        var options = { method: 'PATCH', url: url, data: data };
        return {
            then: function (success, failure) {
                leaf.http.request(options, success, failure);
            }
        };
    }
    http.patch = patch;

	/**
	 * Shorthand function to execute a HTTP GET request and put the content in an element.
	 * @function include
	 * @memberOf leaf.http
	 * @param {string} url The URL.
	 * @param {string} selector The selector string.
	 * @param {Function} success The success Function.
	 * @param {Function} failure The failure Function. 
	 */
	
    function include(url, selector, success, failure) {
    	var el = document.querySelector(selector);

    	leaf.http.get(url).then(function(data) {
    		el.innerHTML = data;
    		
			if (leaf.isFunction(success)) {
				success();
			} 
    	}, function() {
			if (leaf.isFunction(failure)) {
				failure();
			} 
    	});
    }
    http.include = include;

})(http = leaf.http || (leaf.http = {}));
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
	return List;
})();

leaf.List = List;

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
		this._items = items || {}; 
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
		return this._items[key];
	};
	/**
	 * Set the value of the specified key in the Model.
	 * @function set
	 * @memberOf leaf.Model
	 * @param {string} key The key.
	 * @param {*} value The value.
	 */
	Model.prototype.set = function(key, value) {
		this._items[key] = value;
		
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
		delete this._items[key];
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
		for (var key in this._items) {
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
		return JSON.stringify(this._items);
	};	

	/**
	 * Replace double-brackets in a string with Model values.
	 * @function template
	 * @memberOf leaf.Model
	 * @param {string} text The source string.
	 * @return {string} The target string.
	 */
	Model.prototype.template = function(text) {
		this.each(function(key, value) {
			text = text.replace('{{' + key + '}}', value);
		});
		return text;
	};
	return Model;
})();

leaf.Model = Model;

/* 
   #View
   ========================================================================== */

/**
 * Represents a view, component, or HTML fragment.
 * @class View
 * @memberOf leaf
 */
var View = (function() {	
	/**
	 * Add options to the view.
	 * @constructor
	 * @param {Object} options The view's options.
	 */
	function View(options) {
		this.options = options;
		/**
		 * Initialize each instance of the view.
		 */
        if (leaf.isFunction(options.init)) {
            this.each(function (el) {
                options.init(el);
            });
        }
	}
	/**
	 * Render the view on the webpage.
	 * @function render
	 * @memberOf leaf.View
	 * @param {Object} [props] The option.props values.
	 */
	View.prototype.render = function(props) {
		var that = this;
		/**
		 * Store passed properties in the options.
		 */
        that.options.props = props || {};
		/**
		 * Render each instance of the view.
		 */
        if (leaf.isFunction(that.options.draw)) {
            this.each(function (el) {
                el.innerHTML = that.options.draw(el);
            });
        }
	};
	/**
	 * Returns the Object containing the properties.
	 * @return {Object} The properties Object
	 */
	View.prototype.props = function() {
		return this.options.props;
	};
	/**
	 * Execute a callback Function for each match in option.selector.
	 * @function each
	 * @memberOf leaf.View
	 * @param {Function} cb The callback Function.
	 */
	View.prototype.each = function(cb) {
        var els = document.querySelectorAll(this.options.selector);
        
        for (var index = 0, length = els.length; index < length; index++) {
	        cb(els[index]);
        }		
	};
	return View;
})();

leaf.View = View;

/* 
   #Router
   ========================================================================== */

/**
 * Represents a collection of Routes.
 * @class Router
 * @memberOf  leaf
 */
var Router = (function() {	
	/**
	 * Pass an Object to the Router that contains key-value pairs.
	 * @constructor
	 * @param {Object} routes The routes to be added to the Router.
	 */
	function Router(routes) {
		this._routes = routes || {}; 
	}
	/**
	 * Adds a route to the Router.
	 * @function add
	 * @memberOf leaf.Router 
	 * @param {string} hash	The hash.
	 * @param {Function} cb The callback Function.
	 */
	Router.prototype.add = function(hash, cb) {
		this._routes[hash] = cb;
	};
	/**
	 * Get the callback Function of a route in the Router.
	 * @function get
	 * @memberOf leaf.Router 
	 * @param {string} hash The hash.
	 * @return {Function} The callback Function.
	 */
	Router.prototype.get = function(hash) {
		return this._routes[hash];
	};	
	/**
	 * Remove the specified route from the Router.
	 * @function remove
	 * @memberOf leaf.Router 
	 * @param {string} hash The hash.
	 */
	Router.prototype.remove = function(hash) {
		delete this._routes[hash];
	};
	/**
	 * Determine if the specified route exists in the Router.
	 * @function contains
	 * @memberOf leaf.Router 
	 * @param {string} hash The hash.
	 * @return {boolean} True if the hash is found.
	 */
	Router.prototype.contains = function(hash) {
		return hash in this._routes;
	};
	/**
	 * Execute a route's callback Function.
	 * @function invoke
	 * @memberOf leaf.Router 
	 * @param {string} [hash] The hash to load.
	 */
	Router.prototype.invoke = function(hash) {
		var that = this;

		hash = hash || window.location.hash;

		for (var route in this._routes) {
			if (hash.toLowerCase().substring(0, route.length) === route.toLowerCase()) {
				that.get(route)();
			}
        }
	};
	/**
	 * Listen for hash changes and invoke routes.
	 * @function listen
	 * @memberOf leaf.Router 
	 * @param {string} [hash] The hash to load.
	 */
    Router.prototype.listen = function (hash) {
        var that = this;

        window.addEventListener('hashchange', function () {
            that.invoke();
        });
        
       	this.invoke(hash);
    };
	/**
	 * Stop listening to hash changes.
	 * @function ignore
	 * @memberOf leaf.Router 
	 */
    Router.prototype.ignore = function () {
        var that = this;

        window.removeEventListener('hashchange', function () {
            that.invoke();
        });
    };    
	return Router;
})();

leaf.Router = Router;

/* 
   #repeatview
   ========================================================================== */

/**
 * Directive to repeat a List inside a container, replacing handlebar values.
 * @class RepeatView
 * @memberOf leaf
 */
leaf.RepeatView = new leaf.View({
	//
	// The selector string that determines where the view is drawn.
	//
	selector: "[leaf-repeat]",
	//
	// Return the innerHTML of the view.
	//
	draw: function(el) {
		var source = el.innerHTML;
		var target = '';
		var List = new leaf.List();
		var url = this.options.url || el.getAttribute('leaf-repeat');
		//
		// Load the model from a JSON file.
		//
		List.loadJSON(url, 
			function(list) {
				list.each(function(model) {	
					target += model.template(source); 
				});
				el.innerHTML = target;
			}, 
			function(status) {
				el.innerHTML = '';
			}
		);
	}
});

})(leaf || (leaf = {}));