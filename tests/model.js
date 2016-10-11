var leaf = require('../builds/leaf.min.js');

describe('model', function() {
	it('should init', function() {
		var People = new leaf.Model();
		expect(People.on).toBeDefined();
	});
});
