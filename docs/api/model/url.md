# Model.url

Sets or gets the URL to the model services layer.

----------------------------------------------------------------------

## Usage

Model.url

### Returns

`string` The URL.

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				var Person = new leaf.Model();

				Person.url = 'api/people';

				Person.fetch(1, function() {
					console.log(Person.get('firstName'));
				});
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/dpdrqm)
