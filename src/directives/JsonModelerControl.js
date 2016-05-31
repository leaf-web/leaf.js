/* 
   #JsonModelerControl
   ========================================================================== */

/**
 * Control to return a template from a single model in a JSON file.
 * @class JsonModelerControl
 * @memberOf leaf
 */
leaf.JsonModelerControl = new leaf.View({
	//
	// Return the innerHTML of the view.
	//
	draw: function(el) {
		var html = el.innerHTML;
		//
		// Draw the template.
		//             
        leaf.http.get(this.props.url).then(
            function (data) {
                var Model = new leaf.Model(JSON.parse(data));

               el.innerHTML = Model.template(html);
            },
            function () {
                el.innerHTML = '';
            }
        );
		/**
		 * Return loading text if specified.
		 */
		return this.props.text || ''; 
	}
});
