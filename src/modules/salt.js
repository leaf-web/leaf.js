if (!window.jQuery) {
	/**
	 * Use Salt.js for DOM selection if jQuery is not present. 
	 * @function $
	 * @param  {string} selector The selector
	 * @param  {string} [context] The context
	 * @return {HTMLElement} The HTMLElement
	 */
	
	/*! Salt.js DOM Selector Lib. By @james2doyle */

	window.$ = function(selector, context, undefined) {
		/**
		 * Match the first character of the selector to determin the command.
		 */
		var matches = {
			'#': 'getElementById',
			'.': 'getElementsByClassName',
			'@': 'getElementsByName',
			'=': 'getElementsByTagName',
			'*': 'querySelectorAll'
		}[selector[0]];
		/**
		 * Execute the command by passing the selector without the first character.
		 */
		var el = (((context === undefined) ? document: context)[matches](selector.slice(1)));
		/**
		 * Return the element(s).
		 */
		return ((el.length < 2) ? el[0]: el);
	};
}