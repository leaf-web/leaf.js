describe('Model', function() {
	var Person = new leaf.Model({
		"lastName": "Doe",
		"firstName": "John"
	});

	it('should be instantiated from an Array', function() {
		expect(leaf.isDefined(Person)).toBe(true);
	});

	it('should be able to get an attribute', function() {
		expect(Person.get('lastName')).toBe('Doe');
	});

	it('should be able to set an attribute', function() {
		Person.set('firstName', 'Jane');
		expect(Person.get('firstName')).toBe('Jane');
	});

	it('should be able to determine if it was changed', function() {
		expect(Person.changed).toBe(true);
	});

	it('should be able to remove an attribute', function() {
		Person.remove('firstName');
		expect(Person.contains('firstName')).toBe(false);
	});

	it('should be able to check if an attribute exists', function() {
		expect(Person.contains('firstName')).toBe(false);
	});

	it('should observe changes to an attribute.', function() {
		var observed = false;

		Person.on('lastName', function() {
			observed = true;
		});

		Person.set('lastName', 'Smith');

		expect(Person.get('lastName')).toBe('Smith');
	});
});

