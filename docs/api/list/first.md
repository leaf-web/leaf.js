# List.first

Get the first model in the list.

----------------------------------------------------------------------

## Usage

List.first();

### Returns

`Object` The model.

----------------------------------------------------------------------

## Example

	<html>
		<body>
			<script src="scripts/leaf.min.js"></script>
			<script>
				var People = new leaf.List([
					{ "firstName": "John", "lastName": "Doe" },
					{ "firstName": "Jane", "lastName": "Doe" }
				]);

				console.log(People.first().get('firstName')); //returns John
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/gwvrQa)
