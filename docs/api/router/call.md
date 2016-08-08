# Router.contains

Execute a route's callback `Function` on a match.

----------------------------------------------------------------------

## Usage

Router.call(path);

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| path            | `string`      | The path.                        |

### Returns

`boolean` True if the path is found.

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

				Router.call('#/home');
			</script>
		</body>
	</html>	