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
