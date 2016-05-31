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
		//
		// Draw the template.
		// 
		List.loadJSON(this.props.url,
			function(list) {
				el.innerHTML = list.template(html);
			},
			function() {
				el.innerHTML = '';
			}
		);
		/**
		 * Return loading text if specified.
		 */
		return this.props.text || ''; 
	}
});
