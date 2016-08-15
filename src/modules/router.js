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
		return Object.keys(this.items).length;
	};	
	/**
	 * Begin listening for hash changes to invoke routes.
	 * @function listen
 	 * @memberOf leaf.Router
 	 * @since 0.1.0
	 */		
	Router.prototype.listen = function() {
        var that = this;

        window.addEventListener('hashchange', function () {
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

        window.removeEventListener('hashchange', function () {
            that.call();
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
					params[keys[index].replace(':', '')] = value;
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
