# Router.get

Get the callback `function` of a route in the Router.

----------------------------------------------------------------------

## Usage

Model.get(key);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| path            | `string`      | The path.                        |

### Returns

`function` The callback `function`.

----------------------------------------------------------------------

## Example

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

            	console.log(Router.get('#/home'));
            </script>
        </body>
    </html>    