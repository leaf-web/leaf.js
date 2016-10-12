/**
 * Models
 */
describe('List', function() {
	/**
	 * Define our test Model.
	 */
	var People = new leaf.List([
		{
			lastName: 	'Doe',
			firstName: 	'John',
			middleName: 'Robert'
		},
		{
			lastName: 	'Doe',
			firstName: 	'Jane',
			middleName: 'Mary'
		},
	]);
	/**
	 * items
	 */
	it('should check if the Model collection exists', function() {
		expect(leaf.isDefined(People.items)).toBe(true);
	});
	/**
	 * count
	 */
	it('should check the number of Model', function() {
		expect(People.count()).toBe(2);
	});
	/**
	 * each
	 */
	it('should check if the Model can iterated', function() {
		var count = 0;

		People.each(function() {
			count += 1;
		});

		expect(count).toBe(2);
	});
	/**
	 * get
	 */
	it('should check if an Model can be read', function() {
		expect(People.get(0).get('lastName')).toBe('Doe');
	});
	/**
	 * add
	 */
	it('should check if a Model can be added', function() {
		People.add(new leaf.Model({
			lastName: 	'Doe',
			firstName: 	'Sue',
			middleName: 'Ann'
		}));
		expect(People.last().get('firstName')).toBe('Sue');
	});
	/**
	 * merge
	 */
	it('should check if it can merge with another List', function() {
		People.merge([
           {
   				lastName: 	'Doe',
				firstName: 	'Bob',
				middleName: 'Michael'
           }
		]);

		expect(People.last().get('firstName')).toBe('Bob');
	});
	/**
	 * first
	 */
	it('should check if the first item can be read', function() {
		expect(People.first().get('firstName')).toBe('John');
	});
	/**
	 * last
	 */
	it('should check if the last Model can be read', function() {
		expect(People.last().get('firstName')).toBe('Bob');
	});
	/**
	 * sort
	 */
	it('should sort the Models inside the collection', function() {
		People.sort(function(a, b) {
		    if(a.get('firstName') < b.get('firstName')) {
		        return -1;
		    }
		    if(a.get('firstName') > b.get('firstName')) {
		        return 1;
		    }
		    return 0;
		});
		expect(People.last().get('firstName')).toBe('Sue');
	});
	/**
	 * slice
	 */
	it('should check if the Models can be sliced', function() {
		People.slice(0, 2);

		expect(People.count()).toBe(2);
	});
	/**
	 * remove
	 */
	it('should check if a Model can be removed', function() {
		People.remove(0);

		expect(People.count()).toBe(1);
	});
	/**
	 * clear
	 */
	it('should check if all attributes can be cleared', function() {
		People.clear()

		expect(People.count()).toBe(0);
	});
});
