# Constructor

The constructor function.

----------------------------------------------------------------------

## Usage

new leaf.Router([routes])

### Params

| Param           | Type          | Details                          |
| --------------- | ------------- | -------------------------------- |
| routes          | `Object`      | The routes.                      |

### Notes

> Parameters can be included in the path by prefixing it with a colon.

	var Router = new leaf.Router({
		"#/store/:item": function(param) {
			console.log(param.item);
		}
	});

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

            	Router.listen();
            </script>
        </body>
    </html>
