describe('List', function() {
	/**
	 * Define a global test variable.
	 */
	var People;
	/**
	 * add
	 */
	it('add', function() {
		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		People.add(new leaf.Model(
			{
				lastName: 	'Doe',
				firstName: 	'Susan',
			}
		));

		expect(People.count()).toBe(3);
	});
	/**
	 * clear
	 */
	it('clear', function() {
		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		People.clear();

		expect(People.count()).toBe(0);
	});
	/**
	 * clone
	 */
	it('clone', function() {
		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		var Employees = People.clone();

		expect(Employees.count()).toBe(2);
	});
	/**
	 * count
	 */
	it('clone', function() {
		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		expect(People.count()).toBe(2);
	});
	/**
	 * each
	 */
	it('each', function() {
		var iterated = false;

		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		People.each(function() {
			iterated = true;
		});

		expect(iterated).toBe(true);
	});
	/**
	 * filter
	 */
	it('filter', function() {
		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		People.filter(function(model) {
			return model.get('firstName') != 'Jane';
		});

		expect(People.count()).toBe(1);
	});
	/**
	 * first
	 */
	it('first', function() {
		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		expect(People.first().get('firstName')).toBe('John');
	});
	/**
	 * get
	 */
	it('get', function() {
		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		expect(People.get(0).get('firstName')).toBe('John');
	});
	/**
	 * items
	 */
	it('items', function() {
		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		expect(leaf.isDefined(People.items)).toBe(true);
	});
	/**
	 * last
	 */
	it('last', function() {
		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		expect(People.last().get('firstName')).toBe('Jane');
	});

	/**
	 * merge
	 */
	it('merge', function() {
		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		People.merge([
			{
   				lastName: 	'Doe',
				firstName: 	'Mary',
			}
		]);

		expect(People.count()).toBe(3);
	});
	/**
	 * remove
	 */
	it('remove', function() {
		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		People.remove(0);

		expect(People.count()).toBe(1);
	});
	/**
	 * slice
	 */
	it('slice', function() {
		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		People.slice(0, 1);

		expect(People.count()).toBe(1);
	});
	/**
	 * sort
	 */
	it('sort', function() {
		People = new leaf.List([
			{
				lastName: 	'Doe',
				firstName: 	'John',
			},
			{
				lastName: 	'Doe',
				firstName: 	'Jane',
			}
		]);

		People.sort(function(a, b) {
            if(a.get('firstName') < b.get('firstName')) {
                return -1;
            }
            if(a.get('firstName') > b.get('firstName')) {
                return 1;
            }
            return 0;
        });

        expect(People.get(0).get('firstName')).toBe('Jane');
	});
});
