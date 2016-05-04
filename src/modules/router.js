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
