/* 
   #repeatview
   ========================================================================== */

/**
 * Directive to return a List template with double-brackets replaced with values.
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
		var List = new leaf.List();
		var url = el.getAttribute('leaf-repeat');
		var template = el.innerHTML;
		
		List.loadJSON(url, 
			function(list) {
				el.innerHTML = list.template(template);
			}, 
			function(status) {
				el.innerHTML = '';
			}
		);
	}
});
