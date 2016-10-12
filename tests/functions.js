/**
 * Functions
 */
describe('Leaf', function() {
	/**
	 * Define a global test variable.
	 */
	var person = 'John Doe';
	/**
	 * concat
	 */
	it('concat', function() {
		expect(leaf.concat('John', ' ', 'Doe')).toBe(person);
	});
	/**
	 * isArray
	 */
	it('isArray', function() {
		expect(leaf.isArray([1, 2, 3])).toBe(true);
	});
	/**
	 * isBoolean
	 */
	it('isBoolean', function() {
		expect(leaf.isBoolean(true)).toBe(true);
	});
	/**
	 * isDate
	 */
	it('isDate', function() {
		expect(leaf.isDate(new Date())).toBe(true);
	});
	/**
	 * isDefined
	 */
	it('isDefined', function() {
		expect(leaf.isDefined(person)).toBe(true);
	});
	/**
	 * isFunction
	 */
	it('isFunction', function() {
		expect(leaf.isFunction(function() {})).toBe(true);
	});
	/**
	 * isNull
	 */
	it('isNull', function() {
		expect(leaf.isNull(person)).toBe(false);
	});
	/**
	 * isNumber
	 */
	it('isNumber', function() {
		expect(leaf.isNumber(1)).toBe(true);
	});
	/**
	 * isString
	 */
	it('isString', function() {
		expect(leaf.isString(person)).toBe(true);
	});
	/**
	 * isObject
	 */
	it('isObject', function() {
		expect(leaf.isObject({})).toBe(true);
	});
	/**
	 * isUndefined
	 */
	it('isUndefined', function() {
		expect(leaf.isUndefined(person)).toBe(false);
	});
	/**
	 * merge
	 */
	it('merge', function() {
		expect(leaf.merge(
			{
				firstName: 'John'
			},
			{
				lastName: 'Doe'
			}
		).firstName).toBe('John');
	});
	/**
	 * version
	 */
	it('version', function() {
		expect(leaf.isDefined(leaf.version)).toBe(true);
	});
});
