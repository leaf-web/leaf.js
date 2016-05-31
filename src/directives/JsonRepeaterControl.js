/* 
   #JsonRepeaterControl
   ========================================================================== */

/**
 * Control to return a template from a JSON file.
 * @class JsonRepeaterControl
 * @memberOf leaf
 */
leaf.JsonRepeaterControl = new leaf.View({
	//
	// Return the innerHTML of the view.
	//
	draw: function(el) {
		var List = new leaf.List();
		var html = el.innerHTML;
		var that = this;
		//
		// Draw the template.
		// 
		List.loadJSON(this.props.url,
			function(list) {
				el.innerHTML = list.template(html);
				/**
				 * Success
				 */
				if (leaf.isFunction(that.props.success)) { 
					that.props.success(); 
				}
			},
			function() {
				el.innerHTML = '';
				/**
				 * Failure
				 */
				if (leaf.isFunction(that.props.failure)) { 
					that.props.failure(); 
				}				
			}
		);
		/**
		 * Return loading text if specified.
		 */
		return this.props.text || ''; 
	}
});
