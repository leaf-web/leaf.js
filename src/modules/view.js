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
	function View(options) { this.options = options; }
	/**
	 * Render the view on the webpage.
	 * @function render
	 * @memberOf leaf.View
	 * @param {string} [selector] The option.selector value.
	 * @param {Object} [props] The option.props values.
	 */
	View.prototype.render = function(selector, props) {
		/**
		 * Used to reference the view.
		 */
		var that = this;
		/**
		 * Store the selector string.
		 */
		this.options.selector = selector;
		/**
		 * Store the property object.
		 */
		this.options.props = props;		
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
	 * Execute a callback Function for each match in option.selector.
	 * @function each
	 * @memberOf leaf.View
	 * @param {Function} cb The callback Function.
	 */
	View.prototype.each = function(cb) {
        /**
         * Query elements using the selector.
         */		
        var els = document.querySelectorAll(this.options.selector);
        /**
         * Execute the callback for each match.
         */
        for (var index = 0, length = els.length; index < length; index++) {
	        cb(els[index]);
        }
	};
	/**
	 * Returns the Object containing the properties.
	 * @return {Object} The properties Object
	 */
	View.prototype.props = function() {
		return this.options.props;
	};
	return View;
})();

leaf.View = View;
