# Router.ignore

Stop listening for hash changes.

----------------------------------------------------------------------

## Usage

Router.ignore();

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
            	Router.ignore();
            </script>
        </body>
    </html>    