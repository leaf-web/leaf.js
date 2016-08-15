# Router.routes

The route collection.

----------------------------------------------------------------------

## Usage

Router.routes

### Returns

`Object` The route collection.

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

            	console.log(Router.routes['#/home']);
            </script>
        </body>
    </html>    