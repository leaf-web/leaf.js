/* 
   #JsonRepeaterControl
   ========================================================================== */

/**
 * Control to return a template from a single Model.
 * @class JsonModelerControl
 * @memberOf leaf
 */
leaf.JsonModelerControl = new leaf.View({
	//
	// Return the innerHTML of the view.
	//
	draw: function(el) {
		var that = this;
		var html = el.innerHTML;
		//
		// Draw the template.
		// 
		leaf.http.get(this.props.url).then( 
			function(data) {
				var Model = new leaf.Model(JSON.parse(data));
				
               	el.innerHTML = Model.template(html);
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
