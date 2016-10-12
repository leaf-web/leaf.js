describe('Model', function() {
	it('should init', function() {
		var People = new leaf.Model();
		expect(People.on).toBeDefined();
	});
	it('should fail', function() {
		expect(true).toBe(false);
	});
});
