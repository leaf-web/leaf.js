# Router.contains

Determine if the specified path exists in the Router.

----------------------------------------------------------------------

## Usage

Router.contains(path);

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

				console.log(Router.contains('#/home'));				
			</script>
		</body>
	</html>	