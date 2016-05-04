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
		//
		// Load the model from a JSON file.
		//
		List.loadJSON(el.getAttribute('leaf-repeat'), 
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
