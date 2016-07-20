/* 
   #ListRepeaterControl
   ========================================================================== */

/**
 * Control to return a template from a List.
 * @class ListRepeaterControl
 * @memberOf leaf
 * @since 0.1.0
 */
leaf.ListRepeaterControl = new leaf.View({
	//
	// Return the innerHTML of the view.
	//
	draw: function(el) {
		return this.props.data.template(el.innerHTML); 
	}
});