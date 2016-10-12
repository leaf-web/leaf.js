/**
 * Models
 */
describe('Model', function() {
	/**
	 * Define our test Model.
	 */
	var Person = new leaf.Model({
		lastName: 	'Doe',
		firstName: 	'John',
		middleName: 'Robert'
	});
	/**
	 * Define our variable to test observation.
	 */
	var called = false;
	/**
	 * items
	 */
	it('should check if the items collection exists', function() {
		expect(leaf.isDefined(Person.items)).toBe(true);
	});
	/**
	 * contains
	 */
	it('should check if an attribute exists', function() {
		expect(Person.contains('lastName')).toBe(true);
	});
	/**
	 * count
	 */
	it('should check if the attributes can be counted', function() {
		expect(Person.count()).toBe(3);
	});
	/**
	 * each
	 */
	it('should check if the attributes can iterated', function() {
		var count = 0;

		Person.each(function() {
			count += 1;
		});

		expect(count).toBe(3);
	});
	/**
	 * toJSON
	 */
	it('should check if the attributes can be serialized', function() {
		expect(Person.toJSON()).toBe('{"lastName":"Doe","firstName":"John","middleName":"Robert"}');
	});
	/**
	 * get
	 */
	it('should check if an attribute can be read', function() {
		expect(Person.get('lastName')).toBe('Doe');
	});
	/**
	 * set
	 */
	it('should check if an attribute can be written', function() {
		Person.set('firstName', 'Jane');

		expect(Person.get('firstName')).toBe('Jane');
	});
	/**
	 * changed
	 */
	it('should check if an attribute was changed', function() {
		expect(Person.changed).toBe(true);
	});
	/**
	 * on
	 */
	it('should check if an attribute can be observed', function() {
		Person.on('firstName', function() {
			called = true;
		});

		Person.set('firstName', 'John');

		expect(called).toBe(true);
	});
	/**
	 * un
	 */
	it('should check if an attribute can be unobserved', function() {
		called = false;

		Person.un('firstName');

		Person.set('firstName', 'Jane');

		expect(called).toBe(false);
	});
	/**
	 * clone
	 */
	it('should check if it can be cloned', function() {
		var Clone = Person.clone();

		expect(Clone.get('lastName')).toBe('Doe');
	});
	/**
	 * merge
	 */
	it('should check if an attribute can be merged with another Model', function() {
		Person.merge({
			'extension': '1234'
		});

		expect(Person.get('extension')).toBe('1234');
	});
	/**
	 * remove
	 */
	it('should check if an attribute can be removed', function() {
		Person.remove('middleName');

		expect(Person.count()).toBe(3);
	});
	/**
	 * clear
	 */
	it('should check if all attributes can be cleared', function() {
		Person.clear()

		expect(Person.count()).toBe(0);
	});
});
