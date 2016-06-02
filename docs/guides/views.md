# Views

Views represent a view, component, or HTML fragment.

> See [View](https://github.com/leaf-web/leaf.js/blob/master/docs/api.md#leaf.View)

## Creation

Views are created by passing an Object with options to the constructor.

	<html>
		<body>
			<hello></hello>

			<script src="scripts/leaf.min.js"></script>
			<script>
				var View = new leaf.View({
					draw: function() {
						return '<h1>Hello World</h1>';
					}
				});
				View.render('hello'); // The selector.
			</script>
		</body>
	</html>

## Arguments

Arguments can be passed inside the render Function inside an Object.

	<html>
		<body>
			<hello></hello>

			<script src="scripts/leaf.min.js"></script>
			<script>
				var View = new leaf.View({
					draw: function(el) {
						return '<h1>Hello ' + this.props.name + '</h1>';
					}
				});
				View.render('hello', 
					{
						name: 'Leaf'	
					}
				);
			</script>
		</body>
	</html>

## HTMLElement

	<html>
		<body>
			<hello></hello>

			<script src="scripts/leaf.min.js"></script>
			<script>
				var View = new leaf.View({
					draw: function(el) {
						el.style.color = 'red';

						return '<h1>Hello ' + this.props.name + '</h1>';
					}
				});
				View.render('hello', 
					{
						name: 'Leaf'	
					}
				);
			</script>
		</body>
	</html>


