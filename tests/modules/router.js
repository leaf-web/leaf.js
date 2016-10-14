describe('Router', function() {
	/**
	 * Define a global test variable.
	 */
	 var Router;
	/**
	 * add
	 */
	it('add', function() {
		Router = new leaf.Router();

		Router.add('#/home', function() {
			console.log('home');
		});

		expect(Router.contains('#/home')).toBe(true);
	});
	/**
	 * call
	 */
	it('call', function() {
		var called = false;

        Router = new leaf.Router({
            "#/home": function() {
                called = true;
            }
        });

        Router.call('#/home');

		expect(called).toBe(true);
	});
	/**
	 * clear
	 */
	it('clear', function() {
        Router = new leaf.Router({
            "#/home": function() {
                called = true;
            }
        });

        Router.clear();

        expect(Router.count()).toBe(0);
    });
	/**
	 * count
	 */
	it('count', function() {
        Router = new leaf.Router({
            "#/home": function() {
                called = true;
            }
        });

        expect(Router.count()).toBe(1);
    });
	/**
	 * each
	 */
	it('each', function() {
		var iterated = false;

        Router = new leaf.Router({
            "#/home": function() {
                called = true;
            }
        });

        Router.each(function() {
        	iterated = true;
        })

		expect(iterated).toBe(true);
	});
	/**
	 * get
	 */
	it('get', function() {
        Router = new leaf.Router({
            "#/home": function() {
                called = true;
            }
        });

        expect(leaf.isFunction(Router.get('#/home'))).toBe(true);
    });
	/**
	 * remove
	 */
	it('remove', function() {
        Router = new leaf.Router({
            "#/home": function() {
                called = true;
            }
        });

        Router.remove('#/home');

        expect(Router.count()).toBe(0);
    });
	/**
	 * routes
	 */
	it('routes', function() {
        Router = new leaf.Router({
            "#/home": function() {
                called = true;
            }
        });

        expect(leaf.isFunction(Router.routes['#/home'])).toBe(true);
	});
});
