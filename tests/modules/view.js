describe('View', function() {
	/**
	 * Define a global test variable.
	 */
	var Control = new leaf.View({
		draw: function(el) {
			return 'Hello World';
		}
	});
	/**
	 * render
	 */
	it('render', function() {
		expect(leaf.isDefined(Control.render)).toBe(true);
	});
	/**
	 * props
	 */
	it('props', function() {
		expect(leaf.isDefined(Control.props)).toBe(true);
	});
	/**
	 * options
	 */
	it('props', function() {
		expect(leaf.isDefined(Control.options)).toBe(true);
	});
	/**
	 * draw
	 */
	it('draw', function() {
		expect(Control.options.draw()).toBe('Hello World');
	});
});

