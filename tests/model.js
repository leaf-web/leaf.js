describe('Model', function() {
	var Person = new leaf.Model({
		"lastName": "Doe",
		"firstName": "John"
	});

	it('should be instantiated from an Array', function() {
		expect(leaf.isDefined(Person)).toBe(true);
	});
});

