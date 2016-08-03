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
		var that = this;
		var html = el.innerHTML;
		//
		// Draw the template.
		// 
		var List = new leaf.List(this.props.url, 
			function(data) {
			
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
