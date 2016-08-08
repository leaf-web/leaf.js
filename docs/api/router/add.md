# Router.add

Adds a route to the Router.

----------------------------------------------------------------------

## Usage

Router.add(path, cb)

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| path            | `Function`    | The path.                        |
| cb              | `Function`    | The callback function.           |

### Notes

Parameters can be included in the path by prefixing it with a colon.

----------------------------------------------------------------------

## Example

	<html>	
		<body>
			<nav>
				<ul>
					<li><a href="#/home">Home</a></li>
					<li><a href="#/help">Help</a></li>					
				</ul>
			</nav>
				
			<script src="scripts/leaf.min.js"></script>
			<script>	
				var Router = new leaf.Router()

				Router.add('#/home', function() {
					console.log('You clicked the Home link.');
				});

				Router.add('#/help', function() {
					console.log('You clicked the Help link.');
				});
				
				Router.listen();
			</script>
		</body>
	</html>	