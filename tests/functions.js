describe('Functions', function() {
	it('should return true when checking a string with isString', function() {
		expect(leaf.isString('John Doe')).toBe(true);
	});

	it('should return true when checking a number with isNumber', function() {
		expect(leaf.isNumber(1)).toBe(true);
	});

	it('should return true when checking a Boolean with isBoolean', function() {
		expect(leaf.isBoolean(true)).toBe(true);
	});

	it('should return true when checking an Array with isArray', function() {
		expect(leaf.isArray([1,2,3])).toBe(true);
	});

	it('should return true when checking a Function with isFunction', function() {
		expect(leaf.isFunction(function() {})).toBe(true);
	});

	it('should return true when checking an Object with isObject', function() {
		expect(leaf.isObject({})).toBe(true);
	});

	it('should return true when checking a Date with isDate', function() {
		expect(leaf.isDate(new Date())).toBe(true);
	});

	it('should return true when checking a defined variable with isDefined', function() {
		var person = 'John Doe';

		expect(leaf.isDefined(person).toBe(true);
	});

	it('should return true when checking an udefined variable with isUndefined', function() {
		var person;

		expect(leaf.isUndefined(person).toBe(true);
	});

	it('should return true when checking a null value with isNull', function() {
		expect(leaf.isNull('').toBe(true);
	});
});
