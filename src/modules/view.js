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

