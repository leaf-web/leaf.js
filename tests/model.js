describe('Model', function() {
	/**
	 * Define a global test variable.
	 */
	var Person;
	/**
	 * changed
	 */
	it('changed', function() {
		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		Person.set('firstName', 'Jane');

		expect(Person.changed).toBe(true);
	});
	/**
	 * clear
	 */
	it('clear', function() {
		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		Person.clear();

		expect(Person.count()).toBe(0);
	});
	/**
	 * clone
	 */
	it('clone', function() {
		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		expect(Person.clone().get('lastName')).toBe('Doe');
	});
	/**
	 * contains
	 */
	it('contains', function() {
		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		expect(Person.contains('lastName')).toBe(true);
	});
	/**
	 * count
	 */
	it('count', function() {
		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		expect(Person.count()).toBe(2);
	});
	/**
	 * each
	 */
	it('each', function() {
		var iterated = false;

		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		Person.each(function() {
			iterated = true;
		})

		expect(iterated).toBe(true);
	});
	/**
	 * get
	 */
	it('get', function() {
		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		expect(Person.get('lastName')).toBe('Doe');
	});
	/**
	 * items
	 */
	it('items', function() {
		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		expect(Person.items.lastName).toBe('Doe');
	});
	/**
	 * merge
	 */
	it('merge', function() {
		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		Person.merge({
			"middleName": "Michael"
		});

		expect(Person.get('middleName')).toBe('Michael');
	});
	/**
	 * on
	 */
	it('on', function() {
		var called = false;

		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		Person.on('firstName', function() {
			called = true;
		});

		Person.set('firstName', 'Jane');

		expect(called).toBe(true);
	});
	/**
	 * remove
	 */
	it('remove', function() {
		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		Person.remove('lastName');

		expect(Person.count()).toBe(1);
	});
	/**
	 * set
	 */
	it('set', function() {
		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		Person.set('firstName', 'Jane');

		expect(Person.get('firstName')).toBe('Jane');
	});
	/**
	 * toJSON
	 */
	it('toJSON', function() {
		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		expect(leaf.isString(Person.toJSON())).toBe(true);
	});
	/**
	 * un
	 */
	it('un', function() {
		var called = false;

		Person = new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'John'
		});

		Person.on('firstName', function() {
			called = true;
		});

		Person.un('firstName');

		Person.set('firstName', 'Jane');

		expect(called).toBe(false);
	});
});
