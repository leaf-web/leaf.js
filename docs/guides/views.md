# Views

Views represent a view, component, or HTML fragment.

> See [View](https://github.com/leaf-web/leaf.js/blob/master/docs/api.md#leaf.View)

## Creation

Views are created by passing options to the constructor.

	<html>
		<body>
			<hello></hello>

			<script src="scripts/leaf.min.js"></script>
			<script>
				var View = new leaf.View({
					selector: 'hello',
					draw: function() {
						return '<h1>Hello World</h1>';
					}
				});
				View.render();
			</script>
		</body>
	</html>

## Properties

Properties can be passed inside the render Function.

	<html>
		<body>
			<hello></hello>

			<script src="scripts/leaf.min.js"></script>
			<script>
				var View = new leaf.View({
					selector: 'hello',
					draw: function(el) {
						return '<h1>Hello ' + this.props.name + '</h1>';
					}
				});
				View.render({
					name: 'Leaf'	
				});
			</script>
		</body>
	</html>

> See [View.props](https://github.com/leaf-web/leaf.js/blob/master/docs/api.md#leaf.View.props)

## Initialization

Event handlers can be created inside the `init` option.

	<html>
		<body>
			<hello></hello>

			<script src="scripts/leaf.min.js"></script>
			<script>
				var View = new leaf.View({
					selector: 'hello',
					init: function(el) 	{
						el.addEventListener('click', function() {
							console.log('A click event was fired.');
						});
					},
					draw: function(el) {
						return '<h1>Hello ' + this.props.name + '</h1>';
					}
				});
				View.render({
					name: 'Leaf'	
				});
			</script>
		</body>
	</html>
