/* 
   #ListRepeaterControl
   ========================================================================== */

/**
 * Repeat through each model in a List, and replace double-brackets with values.
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