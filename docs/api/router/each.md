# Model.each

Execute a callback `Function` for each route in the router.

----------------------------------------------------------------------

## Usage

Model.each(cb);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| cb              | `Function`    | The callback `Function`.         |

### Notes

The path and callback `Function` are  passed as parameters to cb.

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

            	Router.each(function(route) {
            		console.log(route);
        		});
            </script>
        </body>
    </html>    