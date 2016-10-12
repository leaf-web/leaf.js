/**
 * Functions
 */
describe('Leaf', function() {
	/**
	 * Define a test variable for isDefined and isUndefined.
	 */
	var person = 'John Doe';
	/**
	 * isString
	 */
	it('should check if a reference is a string', function() {
		expect(leaf.isString(person)).toBe(true);
	});
	/**
	 * isNumber
	 */
	it('should check if a reference is a number', function() {
		expect(leaf.isNumber(1)).toBe(true);
	});
	/**
	 * isBoolean
	 */
	it('should check if a reference is a boolean', function() {
		expect(leaf.isBoolean(true)).toBe(true);
	});
	/**
	 * isArray
	 */
	it('should check if a reference is an Array', function() {
		expect(leaf.isArray([1, 2, 3])).toBe(true);
	});
	/**
	 * isFunction
	 */
	it('should check if a reference is a Function', function() {
		expect(leaf.isFunction(function() {})).toBe(true);
	});
	/**
	 * isObject
	 */
	it('should check if a reference is an Object', function() {
		expect(leaf.isObject({})).toBe(true);
	});
	/**
	 * isDate
	 */
	it('should check if a reference is a Date', function() {
		expect(leaf.isDate(new Date())).toBe(true);
	});
	/**
	 * isDefined
	 */
	it('should check if a reference is defined', function() {
		expect(leaf.isDefined(person)).toBe(true);
	});
	/**
	 * isUndefined
	 */
	it('should check if a reference is undefined', function() {
		expect(leaf.isUndefined(person)).toBe(false);
	});
	/**
	 * isNull
	 */
	it('should check if a reference is null', function() {
		expect(leaf.isNull(person)).toBe(false);
	});
	/**
	 * concat
	 */
	it('should check if arguments can be concatenated', function() {
		expect(leaf.concat('John', ' ', 'Doe')).toBe(person);
	});
	/**
	 * merge
	 */
	it('should check if two objects can be merged together', function() {
		expect(leaf.merge(
			{
				firstName: 'John'
			},
			{
				lastName: 'Doe'
			}
		).firstName).toBe('John');
	});
});
