# Router.clear

Removes all the routes in the router.

----------------------------------------------------------------------

## Usage

Router.clear()

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
				var Router = new leaf.Router({
					"#/home": function() {
						console.log('You clicked the Home link.');
					},
					"#/help": function() {
						console.log('You clicked the Help link.');
					}
				});

				Router.clear();
				
				Router.listen();
			</script>
		</body>
	</html>	