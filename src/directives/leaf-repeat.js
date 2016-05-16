/* 
   #repeatview
   ========================================================================== */

/**
 * Directive to repeat a List inside a container, replacing handlebar values.
 * @class RepeatView
 * @memberOf leaf
 */
leaf.RepeatView = new leaf.View({
	//
	// The selector string that determines where the view is drawn.
	//
	selector: "[leaf-repeat]",
	//
	// Return the innerHTML of the view.
	//
	draw: function(el) {
		var source = el.innerHTML;
		var target = '';
		var List = new leaf.List();
		var url = this.options.props.url || el.getAttribute('leaf-repeat');
		//
		// Load the model from a JSON file.
		//
		List.loadJSON(url, 
			function(list) {
				list.each(function(model) {	
					target += model.template(source); 
				});
				el.innerHTML = target;
			}, 
			function(status) {
				el.innerHTML = '';
			}
		);
	}
});
