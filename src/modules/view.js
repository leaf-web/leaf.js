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
        that.options.data = props || {};
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
        var els = document.querySelectorAll(this.options.selector);
        
        for (var index = 0, length = els.length; index < length; index++) {
	        cb(els[index]);
        }		
	};
	return View;
})();

leaf.View = View;
