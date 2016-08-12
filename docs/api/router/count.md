# Router.count

Return the number of routes in the model.

----------------------------------------------------------------------

## Usage

Router.count();

### Returns

`number` The number of routes.

----------------------------------------------------------------------

## Example

    <html>
        <body>
            <script src="scripts/leaf.min.js"></script>
            <script>
				var Router = new leaf.Router({
					"#/home": function() {
						console.log('You clicked the Home link.');
					},
					"#/help": function() {
						console.log('You clicked the Help link.');
					}
				});

            	console.log(Router.count());
            </script>
        </body>
    </html>    