/* 
   #ListRepeaterControl
   ========================================================================== */

/**
 * Control to return a template from a List or Model.
 * @class ListRepeaterControl
 * @memberOf leaf
 */
leaf.ListRepeaterControl = new leaf.View({
	//
	// Return the innerHTML of the view.
	//
	draw: function(el) {
		return this.props.data.template(el.innerHTML); 
	}
});
