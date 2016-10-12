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
		expect(Person.count()).toBe(2);
	});

});
