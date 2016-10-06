# List.last

Get the last model in the list.

----------------------------------------------------------------------

## Usage

List.last();

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

				console.log(People.last().get('firstName')); //returns Jane
			</script>
		</body>
	</html>

[View in CodePen](https://codepen.io/leaf-git/pen/PGQzvz)
